const fs = require('fs');
const http = require('http');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift();

      const students = lines.map((line) => line.split(','));

      let outText = '';
      outText += `Number of students: ${students.length}\n`;

      const fields = {};
      fields.dump = [];
      students.forEach(([firstName, lastName, age, field]) => {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
        fields.dump.push(lastName, age);
      });

      delete fields.dump;
      for (const [field, firstnames] of Object.entries(fields)) {
        outText += `Number of students in ${field}: ${
          firstnames.length}. List: ${firstnames.join(', ')}\n`;
      }

      resolve(outText);
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      res.end(output);
    }).catch(() => {
      res.statusCode = 200;
      res.end('Cannot load the database');
    });
  }
});

app.listen(1245, () => {
  console.log('Server running...');
});

module.exports = app;
