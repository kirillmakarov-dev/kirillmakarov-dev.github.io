const { createServer } = require('http');
const { createReadStream, existsSync, statSync } = require('fs');
const { extname, join } = require('path');

const root = join(__dirname, 'dist');
const port = Number(process.env.PORT || 8091);

const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

createServer((request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host}`);
  const pathname = decodeURIComponent(url.pathname);
  let filePath = join(root, pathname === '/' ? 'index.html' : pathname);

  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(root, 'index.html');
  }

  const stat = statSync(filePath);
  const contentType = types[extname(filePath)] || 'application/octet-stream';
  const range = request.headers.range;

  if (range) {
    const [startText, endText] = range.replace(/bytes=/, '').split('-');
    const start = Number(startText);
    const end = endText ? Number(endText) : stat.size - 1;

    response.writeHead(206, {
      'Accept-Ranges': 'bytes',
      'Content-Length': end - start + 1,
      'Content-Range': `bytes ${start}-${end}/${stat.size}`,
      'Content-Type': contentType,
      'Cache-Control': 'no-store',
    });

    createReadStream(filePath, { start, end }).pipe(response);
    return;
  }

  response.writeHead(200, {
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'no-store',
    'Content-Length': stat.size,
    'Content-Type': contentType,
  });
  createReadStream(filePath).pipe(response);
}).listen(port, '127.0.0.1', () => {
  console.log(`Portfolio preview: http://127.0.0.1:${port}/`);
});
