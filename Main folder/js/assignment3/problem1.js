/*
Conditional statements in JavaScript are used to perform different actions based on different conditions. They allow you to execute certain code blocks if a specified condition is true, and optionally execute a different block of code if the condition is false.*/

/*list
if Statement
if-else Statement
else if Statement
switch Statement
 */








//if statement

// syntax
/*

if(condition){
    if condition met
    code will be executed
}

*/
//example
let a = 10
if (a >= 5){
    console.log(`${a} is if statement`);
}







// if-else Statement

// syntax
/*

if(condition){
    if condition met
    code will be executed
}else{
    if condition not met 
    code will be executed
}

*/

//example
let b = 3
if (b >= 5){
    console.log(`${b} is example of if statement`);
}else{
    console.log(`${b} is else statement`);
}



// else if Statement

// syntax
/*

if(condition1){
    if condition1 met
    code will be executed


}else if (condition2){

    if condition2 met 
    code will be executed
    
}else{

    if condition not met 
    code will be executed

}

*/

//example
let c = 13
if (c <= 10){
    console.log(`${c} is 1st condition`);
}else if (c >= 10){
    console.log(`${c} is 2nd condition`);
}else{
    console.log(`${c} is else statement`);
}


// switch Statement
// As the number of conditions increases, you can use multiple else-if statements in JavaScript. but when we dealing with many conditions, the switch statement may be a more preferred option.

/*
syntax
switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    . . .
    case valueN:
        statementN;
        break;
    default:
        statementDefault;
};
*/

//example
let d = 12;
let e = "example";

switch (true) {
  case d < 50 , d > 1:
    e = "switch case 1";
    break;
  case d > 50:
    e = "switch case 2";
    break;
  case d === 50:
    e = "switch case 3";
    break;
  default:
    e = "default switch case";
    break;
}

console.log(`this is an example of ${e}`);
