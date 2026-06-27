const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = process.env.PORT || 3000;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

function send(res, status, content, type) {
  res.writeHead(status, {
    'Content-Type': type || 'text/plain; charset=utf-8',
    'Cache-Control': 'public, max-age=300'
  });
  res.end(content);
}

function safePath(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '') || 'index.html';
  const filePath = path.resolve(root, clean);
  return filePath.startsWith(root) ? filePath : path.join(root, 'index.html');
}

const server = http.createServer((req, res) => {
  if (req.url === '/health' || req.url === '/api/health') {
    send(res, 200, JSON.stringify({ ok: true, app: 'Conformix Pro Demo' }), 'application/json; charset=utf-8');
    return;
  }

  let filePath = safePath(req.url);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(root, 'index.html');
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      send(res, 500, 'Erro ao carregar arquivo');
      return;
    }
    send(res, 200, content, types[path.extname(filePath).toLowerCase()] || 'application/octet-stream');
  });
});

server.listen(port, () => {
  console.log(`Conformix Pro demo running on port ${port}`);
});
