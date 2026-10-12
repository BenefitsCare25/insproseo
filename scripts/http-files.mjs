import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { extname } from 'node:path';

const types = {
  '.ttf': 'font/ttf', '.woff2': 'font/woff2', '.webp': 'image/webp',
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.ico': 'image/x-icon', '.mp4': 'video/mp4',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8'
};

function byteRange(value, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(value);
  if (!match || (!match[1] && !match[2])) return null;
  const start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
  const end = match[1] && match[2] ? Math.min(size - 1, Number(match[2])) : size - 1;
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= size) return null;
  return { start, end };
}

export async function sendFile(req, res, path, stats, status = 200) {
  const etag = `W/"${stats.size.toString(16)}-${Math.floor(stats.mtimeMs).toString(16)}"`;
  res.setHeader('Content-Type', types[extname(path)] || 'application/octet-stream');
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.setHeader('ETag', etag);
  res.setHeader('Last-Modified', stats.mtime.toUTCString());
  res.setHeader('Accept-Ranges', 'bytes');
  if (status === 200 && req.headers['if-none-match']?.split(/,\s*/).includes(etag)) {
    res.writeHead(304).end();
    return;
  }
  let range;
  if (status === 200 && req.method === 'GET' && req.headers.range && !req.headers['if-range']) {
    range = byteRange(req.headers.range, stats.size);
    if (!range) {
      res.writeHead(416, { 'Content-Range': `bytes */${stats.size}`, 'Content-Length': 0 }).end();
      return;
    }
    status = 206;
    res.setHeader('Content-Range', `bytes ${range.start}-${range.end}/${stats.size}`);
  }
  res.setHeader('Content-Length', range ? range.end - range.start + 1 : stats.size);
  res.writeHead(status);
  if (req.method === 'HEAD') { res.end(); return; }
  try {
    await pipeline(createReadStream(path, range || {}), res);
  } catch (error) {
    if (error.code !== 'ERR_STREAM_PREMATURE_CLOSE' && error.code !== 'ECONNRESET') {
      process.stderr.write(`File streaming failed: ${error.code || 'unknown'}\n`);
    }
    res.destroy();
  }
}
