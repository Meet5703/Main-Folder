/*CallBacks:-
    Callbacks are functions that are passed as arguments to another function.
*/

/*Promises:-
    Promises are objects that represent the eventual completion or failure of an asynchronous operation.
*/

/*Problems With Callbacks:-
    callbacks are able to execute asynchronously. but the problem with callbacks is that it creates a very complicated code that known by name callback hell or pyramid of doom it can be manage without any parameters lets assume we are using many function with parameters in that case we want asynchronous code if we use callbacks we have to call functions inside functions with its parameters and need to define that params thats makes to massive code there for we are not using callbacks for asynchronous code. 
*/
/*Solutions With Promises:-
    Promises are objects that represent the eventual completion or failure of an asynchronous operation and can be created using the Promise constructor function there for evry function we can return a promise object which is using a function with resolve and reject parameters if our code is executed successfully then we will get a resolve parameter if our code is not executed successfully then we will get a reject parameter and for make simple call functions with promises we can use '.then' word after functioon calling and inside .then we have to write a fat arrow function for call another function with parameters.
*/

// example of callbacks and promises with diffrance in code

//Function with callbacks
function Todo(callback) {
  setTimeout(function () {
    console.log("This Is Todo List");
    callback();
  }, 3000);
}
function addTasks(Task, callback) {
  setTimeout(function () {
    console.log("Added Tasks: " + Task);
    callback();
  }, 1000);
}
//callback hell nesting of functions
Todo(function () {
  addTasks("Task 1, Task 2, Task 3", function () {
    addTasks("Task 4, Task 5, Task 6");
  });
});

//Function with promises
function Todo() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("This Is Todo List");
      resolve();
    }, 3000);
  });
}
function addTasks(Task) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Added Tasks: " + Task);
      resolve();
    }, 1000);
  });
}

Todo().then(() => addTasks("Task 1, Task 2, Task 3"));
