//Comma operator

        /*The comma (,) operator evaluates each of its operands (from left to right) and returns the value of the last operand.*/

        /*We can use the comma operator when you want to include multiple expressions in a location that requires a single expression. The most common usage of this operator is to supply multiple updaters in a for loop.*/

//example
let a = 10 , b = 20

a = a++ , a , a-- 
console.log(a);

b= b++ , b , b--
console.log(b);  
        