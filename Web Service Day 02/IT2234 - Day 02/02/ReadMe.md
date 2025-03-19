# JavaScript JSON Student Data Processing

This project contains JavaScript code to define and manipulate JSON data structures for student records. The code includes array operations, filtering based on conditions, and calculating statistics like maximum and average GPA.

## Getting Started
Ensure you have Node.js installed or use the browser console to execute the JavaScript code.

## Code Overview

### 1. JSON Student Definition
- Defines individual student objects with properties like `regno`, `name`, `age`, `course`, and `skills`.
- Stores multiple student records in an array.

### 2. Student Filtering & GPA Calculation
- Filters students based on gender.
- Extracts students enrolled in the IT course.
- Finds the maximum GPA among students.
- Calculates the average GPA of all students.

## Running the Code
To execute the JavaScript file:
```sh
node Json.js
```
Or, copy and paste the code into the browser's developer console.

## Expected Outputs
```sh
Female Students [{id: 1, name: 'Alice', gender: 'Female', course: 'IT', gpa: 3.8}, ...]
IT Course Students [{id: 1, name: 'Alice', course: 'IT', gpa: 3.8}, ...]
Maximum GPA: 4.0
Average GPA: 3.51
```
