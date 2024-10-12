// Step 1: Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Step 2: Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "San Francisco",
};

// Step 3: Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Step 4: Render the table
const body = document.querySelector("body");

// Create table element
const table = document.createElement("table");

// Append header row
const headerRow = table.insertRow();
const header1 = headerRow.insertCell(0);
header1.innerHTML = "<b>First Name</b>";
const header2 = headerRow.insertCell(1);
header2.innerHTML = "<b>Location</b>";

// Append rows for each student
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

// Append the table to the body
body?.appendChild(table);
