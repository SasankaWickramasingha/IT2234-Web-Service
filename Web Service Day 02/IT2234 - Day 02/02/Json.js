//JSON
// let student = {regno: '2021/ICT/36', name: "Kosala Madushan", age: 22, Course: 'Bsc.IT', Skills: ['Java', 'C++', 'JS']}
// console.log(student)
// console.log(student.name)
// console.log()

// let students1 = [
//     {regno: '2021/ICT/36', name: "Kosala Madushan", age: 23, Course: 'Bsc.IT', Skills: ['Java', 'C++', 'JS']},
//     {regno: '2021/ICT/46', name: "Malidu Sasanka", age: 24, Course: 'Bsc.IT', Skills: ['Java', 'C++', 'JS']},
//     {regno: '2021/ICT/34', name: "Chamara weerasinghe", age: 24, Course: 'Bsc.IT', Skills: ['Java', 'C++', 'JS']}
// ]
// console.log(students1)
// console.log()

//Exercise 01
//Define 10 students JSON
//store it in an array
//find the female students
//find the students who are following IT course
//find the max and average GPA among the students

let students2 = [
    { id: 1, name: "Alice", gender: "Female", course: "IT", gpa: 3.8 },
    { id: 2, name: "Bob", gender: "Male", course: "Engineering", gpa: 3.2 },
    { id: 3, name: "Charlie", gender: "Male", course: "IT", gpa: 3.5 },
    { id: 4, name: "David", gender: "Male", course: "Business", gpa: 2.9 },
    { id: 5, name: "Emma", gender: "Female", course: "IT", gpa: 3.9 },
    { id: 6, name: "Fiona", gender: "Female", course: "Medicine", gpa: 3.7 },
    { id: 7, name: "George", gender: "Male", course: "IT", gpa: 3.4 },
    { id: 8, name: "Hannah", gender: "Female", course: "Engineering", gpa: 3.6 },
    { id: 9, name: "Ian", gender: "Male", course: "IT", gpa: 3.1 },
    { id: 10, name: "Jessica", gender: "Female", course: "IT", gpa: 4.0 }
];

let femaleStudents = [];
for (let i = 0; i < students2.length; i++) {
    if (students2[i].gender === "Female") {
        femaleStudents.push(students2[i]);
    }
}
console.log("Female Students",femaleStudents)


let itStudents = [];
for (let i = 0; i < students2.length; i++) {
    if (students2[i].course === "IT") {
        itStudents.push(students2[i]);
    }
}
console.log("IT Course Students:", itStudents);

let maxGPA = students2[0].gpa; 
let totalGPA = 0;

for (let i = 0; i < students2.length; i++) {
    let currentGPA = students2[i].gpa;
    
    if (currentGPA > maxGPA) {
        maxGPA = currentGPA;
    }
    totalGPA += currentGPA;
}


let averageGPA = totalGPA / students2.length;
console.log("Maximum GPA:", maxGPA);
console.log("Average GPA:", averageGPA);