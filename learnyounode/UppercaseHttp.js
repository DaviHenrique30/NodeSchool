const http = require('http');
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString().toUpperCase();
    });
    req.on('end', () => {
      res.end(body);
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(process.argv[2]);