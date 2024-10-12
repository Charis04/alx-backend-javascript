interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Define the StudentClassInterface
interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

// Define the StudentClass
interface StudentClassMethods {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface, StudentClassMethods {
  // Class properties
  firstName: string;
  lastName: string;

  // Constructor accepting firstName and lastName
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to simulate working on homework
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to display the student's first name
  displayName(): string {
    return this.firstName;
  }
}
