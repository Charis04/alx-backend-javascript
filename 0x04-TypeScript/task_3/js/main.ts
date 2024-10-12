/// <reference path="./crud.d.ts" />

// Importing types from the interface file
import { RowID, RowElement } from "./interface";
// Importing everything from crud.js
import * as CRUD from "./crud";

// Create an object with the type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Create a const variable named newRowID with the type RowID
const newRowID: RowID = CRUD.insertRow(row); // Assign the value returned by insertRow

// Create a const variable named updatedRow with the type RowElement
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow); // Update the row
CRUD.deleteRow(newRowID); // Delete the row
