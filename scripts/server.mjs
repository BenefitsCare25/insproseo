import { createServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sendFile } from './http-files.mjs';

const root = await realpath(fileURLToPath(new URL('../site/', import.meta.url)));
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || (process.argv.includes('--local') ? '127.0.0.1' : '0.0.0.0');
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be between 1 and 65535');
const redirects = new Map((await readFile(resolve(root, '_redirects'), 'utf8')).split(/\r?\n/)
  .filter((line) => line.trim() && !line.trim().startsWith('#'))
  .map((line) => {
    const [from, to, code] = line.trim().split(/\s+/);
    if (!from.startsWith('/') || !to.startsWith('/') || to.startsWith('//') || code !== '301') {
      throw new Error('Invalid redirect configuration');
    }
    return [from, to];
  }));
const headers = Object.fromEntries((await readFile(resolve(root, '_headers'), 'utf8'))
  .split(/\r?\n/).filter((line) => /^\s+\S/.test(line)).map((line) => {
    const colon = line.indexOf(':');
    if (colon < 1) throw new Error('Invalid header configuration');
    return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()];
  }));

function withinRoot(path) {
  const rel = relative(root, path);
  return !isAbsolute(rel) && rel !== '..' && !rel.startsWith(`..${sep}`);
}

async function locate(path) {
  if (!withinRoot(path)) return null;
  try {
    const resolved = await realpath(path);
    if (!withinRoot(resolved)) return null;
    return { path: resolved, stats: await stat(resolved) };
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return null;
    throw error;
  }
}

function reply(req, res, status, message, extra = {}) {
  const body = `${message}\n`;
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store', 'Content-Length': Buffer.byteLength(body), ...extra });
  res.end(req.method === 'HEAD' ? undefined : body);
}

async function handle(req, res) {
  for (const [key, value] of Object.entries(headers)) res.setHeader(key, value);
  if (!['GET', 'HEAD'].includes(req.method)) {
    reply(req, res, 405, 'Method not allowed', { Allow: 'GET, HEAD' }); return;
  }
  let url, pathname;
  try {
    if (!req.url.startsWith('/') || req.url.startsWith('//')) throw new Error('Invalid URL');
    const rawPath = decodeURIComponent(req.url.split('?')[0]);
    if (/[\\\x00-\x1f\x7f:]/.test(rawPath) || rawPath.split('/').some((part) => part.startsWith('.') || part.endsWith('.') || part.endsWith(' '))) {
      reply(req, res, 400, 'Invalid path'); return;
    }
    url = new URL(req.url, 'http://localhost');
    pathname = decodeURIComponent(url.pathname);
  } catch {
    reply(req, res, 400, 'Invalid URL'); return;
  }
  if (pathname === '/healthz') { reply(req, res, 200, 'ok'); return; }
  if (pathname.split('/').some((part) => part.startsWith('_'))) {
    reply(req, res, 404, 'Not found'); return;
  }
  if (redirects.has(pathname)) {
    const target = new URL(redirects.get(pathname), 'http://localhost');
    if (!target.search) target.search = url.search;
    reply(req, res, 301, 'Moved permanently', { Location: target.pathname + target.search + target.hash }); return;
  }
  let file = await locate(resolve(root, `.${pathname}`));
  if (file?.stats.isDirectory()) {
    if (!pathname.endsWith('/')) {
      reply(req, res, 301, 'Moved permanently', { Location: url.pathname + '/' + url.search }); return;
    }
    file = await locate(resolve(file.path, 'index.html'));
  }
  if (file?.stats.isFile()) {
    if (pathname.endsWith('/index.html')) {
      reply(req, res, 301, 'Moved permanently', { Location: url.pathname.slice(0, -'index.html'.length) + url.search }); return;
    }
    await sendFile(req, res, file.path, file.stats); return;
  }
  const fallback = await locate(resolve(root, '404.html'));
  if (fallback) await sendFile(req, res, fallback.path, fallback.stats, 404);
  else reply(req, res, 404, 'Not found');
}

const server = createServer({ requestTimeout: 30000, headersTimeout: 15000, maxHeaderSize: 16384 }, (req, res) => {
  handle(req, res).catch((error) => {
    process.stderr.write(`Request failed: ${error.code || error.name}\n`);
    if (!res.headersSent) reply(req, res, 500, 'Internal server error');
    else res.destroy();
  });
});
server.on('error', (error) => {
  process.stderr.write(`Server failed: ${error.code || error.message}. Check HOST/PORT and port availability.\n`);
  process.exitCode = 1;
});
server.listen(port, host, () => process.stdout.write(`Inspro listening at http://${host}:${port}\n`));
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => {
    server.close(() => { process.exitCode = 0; });
    setTimeout(() => server.closeAllConnections(), 5000).unref();
  });
}
