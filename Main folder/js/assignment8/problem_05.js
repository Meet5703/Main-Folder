let arr = [1, 2, 3, 4];
let arr2 = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];

//in this code loop will iterate through the array and check if the value is present in the array or not and return true or false accordingly which is same functanality as original .includes()
Object.prototype.customInclude = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (JSON.stringify(this[i]) === JSON.stringify(value)) {
      return true;
    }
  }
  return false;
};
console.log(arr.customInclude(4)); //true
console.log(arr.customInclude(5)); //false

console.log(arr2.customInclude({ c: 3 })); //true
