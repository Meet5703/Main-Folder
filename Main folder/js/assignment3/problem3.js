/*
What are loops, and what do we need them?

Loops are fundamental programming constructs that allow you to execute a block of code repeatedly as long as a specified condition is true. 

In our program if any block or function using repeatedly with just changing values program is same in that case we have to need loops because of we cannot change value of same program repeating for many times and there are changes are too much so that we can make a loop program where we have to erite that block of code for one time and if any changes will come we have to change it for one time it will apply to whole code 
 */


//Types of loops 

/* There are two types of loops 
1. Entry controlled Loops
2. Exit controlled loops


1. Entry controlled Loops
    - For Loop
    - While loop
2. Exit controlled loops
    - Do While Loop
*/



//Syntaxes

/*
1. For Loop
    for(Initialize value; Condition; Update Statement){
        Block of Loop
    }

2. While Loop
    while(Condition){
        statement
    }

3. Do While Loop
    do{
        statement
    }while(condition)
 */

//Examples

// 1. For Loop
for(let a = 0; a <= 4; a++){
    console.log(`${a} is for Loop`);
}

//While Loop
let b = 0
while(b<= 4){
    b++
    console.log(`${b} is While Loop `);
}

//do while loop

let c = 0
do{
    c++
    console.log(`${c} is Do While Loop`);
}while(c < 5)
