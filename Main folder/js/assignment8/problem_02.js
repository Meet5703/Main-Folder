//person constructor function that comes from problem_01.js
function objPerson(name, age) {
  this.name = name;
  this.age = age;
}
//for get access of person constructor function inside of employee constructor i used call method to call parent constructor and from parent constructor i called properties name and age and called this keyword for current instance of employee
function employee(name, age, designation) {
  objPerson.call(this, name, age);
  this.designation = designation;
  return;
}
//inheritance from objPerson constructor function to employee constructor function
employee.__proto__ = objPerson.prototype;

//getDetails method for employee object
employee.prototype.getDetails = function () {
  console.log({
    Name: this.name,
    Age: this.age,
    Designation: this.designation
  });
};

//example usage
new employee("Meet", 21, "Developer").getDetails();
