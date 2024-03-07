function outerFunction(param) {
  //param is a parameter of outer function
  let outerVariable; //declared a variable in outer function
  function innerFunction() {
    //innerfunction inside outerfunction and this inner function is accessing outer variable and parameters of outerfunction which defines lexical scoping
    console.log("Divide of your number by 2 is =", (outerVariable = param / 2));
  }
  return innerFunction;
}
let calc = outerFunction(10); //stored function call with param 10 in calc variable and then called calc
calc();
