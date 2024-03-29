//person constructor function
function objPerson(name, age) {
  this.name = name;
  this.age = age;
  return;
}
//sayHello method for person object to greet
objPerson.prototype.sayHello = function () {
  console.log(`hello, ${this.name}`);
};

//example usage

//create a new object for access of sayHello method with new word
new objPerson("Meet", 21).sayHello();
