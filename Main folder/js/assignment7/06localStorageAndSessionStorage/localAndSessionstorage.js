/*Purpose:

Both localStorage and sessionStorage are part of the Web Storage API and provide web developers with a way to store key/value pairs locally in a user's browser. They offer persistent storage options, but with different lifespans

Local Storage:
        The data stored using localStorage persists even after the browser is closed and reopened. It has no expiration time unless explicitly cleared by the user or through JavaScript.

Session Storage:
        The data stored using sessionStorage is only available for the duration of the page session. Once the browser tab or window is closed, the data is cleared.

*/

//storing data in local storage
localStorage.setItem("name", "Meet");
localStorage.setItem("age", 20);

//This Data will still remains in browser after browser is closed
let Name = localStorage.getItem("name");
let Age = localStorage.getItem("age");
console.log(Name);
console.log(Age);

//storing data in session storage
sessionStorage.setItem("favColor", ["blue", "green", "yellow"]);
sessionStorage.setItem("favFood", "pizza");

//This data will be cleared after browser is closed for check first you have to open this file in browser and then load this datas after done close browser and comment logic of storage both local and session and then open index.html in browser and check console you will recive localstorage data and sessionstorage data will removed

let colors = sessionStorage.getItem("favColor");
let food = sessionStorage.getItem("favFood");
console.log(colors);
console.log(food);
