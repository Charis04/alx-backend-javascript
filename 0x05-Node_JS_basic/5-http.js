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

      outText = `Number of students: ${students.length}`;

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
            firstnames.length
          }. List: ${firstnames.join(', ')}`,
      }

      resolve(outText);
    });
  });
}

const app = http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('Hello Holberton School!');
    res.end();
  }
  else {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('This is the list of our students');
    res.write(countStudents(process.argv[2].to))
  }
  
});

app.listen(1245);

module.exports = app;
