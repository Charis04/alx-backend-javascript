const express = require('express');

// Create an instance of the Express application
const app = express();

// Define the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the app listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log('...');
});

// Export the app
module.exports = app;
