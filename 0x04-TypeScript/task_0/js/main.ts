// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 23,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 25,
  location: 'London',
};

// Create an array containing the two student objects
const studentsList: Student[] = [student1, student2];

// Create the table element
const table: HTMLTableElement = document.createElement('table');

// Create the table body
const tbody: HTMLTableSectionElement = document.createElement('tbody');

// Append each student to the table
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  // Create table data for first name
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  // Create table data for location
  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  // Append cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table body
  tbody.appendChild(row);
});

// Append the table body to the table
table.appendChild(tbody);

// Append the table to the document body
document.body.appendChild(table);