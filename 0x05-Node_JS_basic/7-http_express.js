const express = require('express');
const fs = require('fs');

// Create an instance of the Express application
const app = express();

// Function to read and process the CSV file
const countStudents = (database) => {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
      if (lines.length === 0) {
        reject(new Error('No data in the database'));
        return;
      }

      const header = lines.shift(); // Remove the header row
      const students = lines.map((line) => line.split(','));

      const summary = {};
      students.forEach((student) => {
        const field = student[3];
        if (!summary[field]) {
          summary[field] = [];
        }
        summary[field].push(student[0]);
      });

      let result = `Number of students: ${students.length}\n`;
      for (const [field, names] of Object.entries(summary)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
};

// Define the root endpoint
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Define the /students endpoint
app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const database = process.argv.length > 2 ? process.argv[2] : ''; // Get the database file passed as an argument

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
