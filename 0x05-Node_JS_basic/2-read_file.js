const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift();
    const students = lines.map((line) => line.split(','));
    const fields = {};
    fields.dump = [];

    console.log(`Number of students: ${students.length}`);

    students.forEach(([firstName, lastName, age, field]) => {
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
      fields.dump.push(lastName, age);
    });

    for (const [field, firstnames] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${
          firstnames.length
        }. List: ${firstnames.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database!');
  }
}

module.exports = countStudents;
