//recursion

// Recursion is a programming technique where a function calls itself in order to solve problems by breaking them down into smaller, similar subproblems, manipulating values through repeated function calls until reaching a base case for termination.


function factorialOfNumber(n) {//here function has parameter 'n'
    if (n == 0) {//this is base case it means when call stack goes to 0 there were we alredy know factorial of 0 is 1 for that call stack stops there and can't goes to nagetive integer
        return 1; 
    } else {
         return n * factorialOfNumber(n - 1); //here I am using Recursion for      make factorial number
         
    }
}

console.log(`factorial of 1 is ${factorialOfNumber(1)}`)
console.log(`factorial of 2 is ${factorialOfNumber(2)}`)
console.log(`factorial of 3 is ${factorialOfNumber(3)}`)
console.log(`factorial of 4 is ${factorialOfNumber(4)}`)
console.log(`factorial of 5 is ${factorialOfNumber(5)}`)
console.log(`factorial of 5 is ${factorialOfNumber(7)}`)
console.log(`factorial of 5 is ${factorialOfNumber(10)}`)

