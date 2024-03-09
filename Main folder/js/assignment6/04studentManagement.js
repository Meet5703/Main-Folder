const students = [
  { id: 1, firstname: "Meet", lastname: "Khetani", age: 21, grade: "A" },
  { id: 2, firstname: "Piyush", lastname: "Gupta", age: 23, grade: "A" },
  { id: 3, firstname: "Raj", lastname: "Kumar", age: 21, grade: "c" }
];
//here we can add new student as per needs using addStudent function
function addStudent(firstname, lastname, age, grade) {
  let newStudent = {
    id: students.length + 1,
    firstname: firstname,
    lastname: lastname,
    age: age,
    grade: grade
  };
  students.push(newStudent);
  console.log("added", students);
}

addStudent("Manthan", "Pithiya", 21, "A");

//here we can update student as per needs using updateStudent function
function updateStudent(id, firstname, lastname, age, grade) {
  let index = students.findIndex((student) => student.id == id);
  if (index !== -1) {
    if (firstname !== undefined) {
      students[index].firstname = firstname;
    }
    if (lastname !== undefined) {
      students[index].lastname = lastname;
    }
    if (age !== undefined) {
      students[index].age = age;
    }
    if (grade !== undefined) {
      students[index].grade = grade;
    }
    console.log("updated", students);
  } else {
    console.log("Student not found");
  }
}

updateStudent(1, "Meet Sureshbhai", "Khetani", 21, "A"); // Update all fields
updateStudent(2, "Priyanshu"); // in this func we can update a saparate field other remains same

//here we can delete student as per needs using deleteStudent function
function deleteStudent(id) {
  let index = students.findIndex((student) => student.id == id);
  if (index !== -1) {
    students.splice(index, 1);
    console.log("deleted", students);
  } else {
    console.log("Student not found");
  }
}

deleteStudent(4);

console.log(students, "student deleted");

//here we can list all students as per needs using listStudents function
function listStudents() {
  console.log("list of students");
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].id, students[i].firstname, students[i].lastname);
  }
}
listStudents();

//here we can list all students by grade as per needs using findStudentbyGrade function
function findStudentbyGrade(grade) {
  console.log("list of students");
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade == grade) {
      console.log(
        students[i].id,
        students[i].firstname,
        students[i].lastname + " Grade = " + students[i].grade
      );
    }
  }
}
findStudentbyGrade("A");

//here we can calculate avarage age as per needs using avarageAge function
function avarageAge() {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].age;
  }
  let avarage = sum / students.length;
  console.log("avarage age = ", Math.round(avarage));
}
avarageAge();
