function curry (x){//this is main function
    return function(y){//this is function as argument called as return value
        return function(z){
            return x + y + z//this is final return value where all code will executed
        }
    }
}
console.log(curry(10))//this will return function y
console.log(curry(10)(28))//this will return function z
console.log(curry(10)(28)(34))//this will return output