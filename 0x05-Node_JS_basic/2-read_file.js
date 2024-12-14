const fs = require("fs");

function countStudents(filePath) {
  const data = fs.readFileSync(filePath, "utf-8");
  const lines = data.split("\n").filter((line) => line.trim() !== "");
  const header = lines.shift();
  const students = lines.map((line) => line.split(","));
  const fields = {};

  console.log(`Number of students: ${students.length}`);

  students.forEach(([firstName, lastName, age, field]) => {
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstName);
  });

  for (const field in fields) {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[
        field
      ].join(", ")}`
    );
  }
}

module.exports = countStudents;
