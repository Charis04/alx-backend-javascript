const fs = require('fs');

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

      console.log(`Number of students: ${students.length}`);

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
        console.log(
          `Number of students in ${field}: ${
            firstnames.length
          }. List: ${firstnames.join(', ')}`,
        );
      }

      resolve();
    });
  });
}

module.exports = countStudents;
