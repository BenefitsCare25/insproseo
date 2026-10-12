import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const project = fileURLToPath(new URL('../', import.meta.url));
const root = resolve(project, 'site');
const failures = [];
let references = 0;
const redirectLines = (await readFile(resolve(root, '_redirects'), 'utf8')).split(/\r?\n/)
  .map(line => line.trim()).filter(line => line && !line.startsWith('#'));
const redirects = new Map();
for (const line of redirectLines) {
  const [from, to, code, extra] = line.split(/\s+/);
  if (!from.startsWith('/') || !to?.startsWith('/') || to.startsWith('//') || code !== '301' || extra || redirects.has(from)) {
    failures.push(`Invalid or duplicate redirect: ${line}`);
    continue;
  }
  redirects.set(from, to);
}

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isSymbolicLink()) { failures.push(`Symlink is not portable: ${path}`); continue; }
    if (entry.isDirectory()) files.push(...await filesIn(path));
    else files.push(path);
  }
  return files;
}

async function checkReference(value, from) {
  if (!value || /^(mailto:|tel:|data:|blob:)/i.test(value)) return;
  const sourcePath = '/' + relative(root, from).replaceAll('\\', '/');
  let url;
  try { url = new URL(value.replaceAll('&amp;', '&'), `https://www.inspro.com.sg${sourcePath}`); }
  catch { failures.push(`Invalid URL in ${sourcePath}: ${value}`); return; }
  if (url.origin !== 'https://www.inspro.com.sg') return;
  const seen = new Set();
  while (redirects.has(url.pathname)) {
    if (seen.has(url.pathname)) { failures.push(`Redirect loop: ${sourcePath} -> ${value}`); return; }
    seen.add(url.pathname);
    url = new URL(redirects.get(url.pathname), url.origin);
  }
  const path = decodeURIComponent(url.pathname);
  if (path.split('/').includes('..')) { failures.push(`Unsafe path: ${value}`); return; }
  let target = resolve(root, `.${path}`);
  try {
    if ((await stat(target)).isDirectory()) target = resolve(target, 'index.html');
    if (!(await stat(target)).isFile()) throw new Error('Not a file');
    references++;
    if (url.hash && extname(target) === '.html') {
      const html = await readFile(target, 'utf8');
      const ids = [...html.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map((match) => match[1]);
      if (!ids.includes(decodeURIComponent(url.hash.slice(1)))) failures.push(`Missing anchor: ${sourcePath} -> ${value}`);
    }
  } catch { failures.push(`Missing file: ${sourcePath} -> ${value}`); }
}

const files = await filesIn(root);
const scripts = [...files.filter((file) => extname(file) === '.js'), ...await filesIn(resolve(project, 'scripts'))];
for (const file of scripts.filter((path) => /\.(mjs|js)$/.test(path))) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit', windowsHide: true });
  if (result.status !== 0) failures.push(`Syntax check failed for ${relative(project, file)}: ${result.error?.message || `exit ${result.status}`}`);
}
for (const file of files.filter((path) => /\.(html|css)$/.test(path))) {
  const content = await readFile(file, 'utf8');
  const pattern = extname(file) === '.html' ? /\b(?:src|href|poster)\s*=\s*["']([^"']+)["']/g : /url\(\s*["']?([^\s"')]+)["']?\s*\)/g;
  for (const match of content.matchAll(pattern)) await checkReference(match[1], file);
  if (extname(file) === '.html') {
    if (!/<title>[^<]+<\/title>/.test(content) || !/<html\s+lang=/.test(content)) failures.push(`Missing page metadata: ${file}`);
    for (const match of content.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(match[1]); } catch { failures.push(`Invalid JSON-LD: ${file}`); }
    }
  }
}
for (const from of redirects.keys()) {
  await checkReference(from, resolve(root, 'index.html'));
}
for (const match of (await readFile(resolve(root, 'sitemap.xml'), 'utf8')).matchAll(/<loc>([^<]+)<\/loc>/g)) {
  await checkReference(match[1], resolve(root, 'index.html'));
}
const hero = await readFile(resolve(root, 'assets/js/hero.js'), 'utf8');
for (const match of hero.matchAll(/const VIDEO_URL = "([^"]+)"/g)) await checkReference(match[1], resolve(root, 'index.html'));
if (failures.length) {
  process.stderr.write(failures.join('\n') + '\n');
  process.exitCode = 1;
} else {
  process.stdout.write(`PASS: ${files.length} site files, ${scripts.length} script syntax checks, ${references} local file/anchor references, redirect targets, sitemap and structured data.\n`);
}
