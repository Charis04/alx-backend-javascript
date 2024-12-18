const http = require('http');

const app = http.createServer((req, res) => {
  res.write('Hello ALX!');
  res.end();
});

app.listen(1245);

module.exports = app;
