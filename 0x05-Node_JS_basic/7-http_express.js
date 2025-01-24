const express = require('express');
const fs = require('fs');

// Create an instance of the Express application
const app = express();

// Function to read and process the CSV file
const countStudents = (filePath) => {
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
// Define the root endpoint
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Define the /students endpoint
app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const database = process.argv[2]; // Get the database file passed as an argument

  if (!database) {
    res.status(500).send('Database argument is missing');
    return;
  }

  try {
    const summary = await countStudents(database);
    res.send(`This is the list of our students\n${summary}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Make the app listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the app
module.exports = app;
