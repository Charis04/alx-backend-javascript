const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(1245);

module.exports = app;
