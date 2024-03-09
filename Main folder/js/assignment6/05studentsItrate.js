const student = {
  Name: "Meet",
  Age: 21,
  Major: "Computer Science",
  GPA: 3.5,
  isEnrolled: true
};
function displayStudentInfo(student) {
  for (let key in student) {
    console.log("Property", key, ", Value", student[key]);
  }
}
displayStudentInfo(student);
