//this cunstructor function is used to create object of class we also can use prototype to create object of class after es6 class is maden some things easy to write in prototype we have to creat an constructor function and use prototype to create object of class and for methods we have define methods using protype syntaxes in class we not need to write complex syntax to define methods in class
class calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  addition() {
    return console.log(
      `sum of two numbers ${this.x} and ${this.y} is: ${this.x + this.y}`
    );
  }
  subtraction() {
    this.result = this.x - this.y;
    return console.log(
      `subtraction of two numbers ${this.x} and ${this.y} is: ${
        this.x - this.y
      }`
    );
  }
  multiplication() {
    return console.log(
      `multiplication of two numbers ${this.x} and ${this.y} is: ${
        this.x * this.y
      }`
    );
  }
  division() {
    if (this.y == 0) {
      return "Cannot divide by zero";
    } else {
      this.result = this.x / this.y;
      return console.log(
        `division of two numbers ${this.x} and ${this.y} is: ${this.result}`
      );
    }
  }
}

let calc = new calculator(40, 20);
calc.addition();
calc.subtraction();
calc.multiplication();
calc.division();
