// Traditional function is hoisted, but arrow function is not hoisted.


console.log("Addition is :", add(10, 5));   // Addition is : 15
function add(a, b) {
    return a + b;
}




// Arrow function is not hoisted. Can't acces before initialization

// console.log("Before initialization : ", multiply(10, 5));     //ReferenceError  
let multiply = (a, b) => a * b;     //Implicitly return - single line auto return
console.log(multiply(10, 5));

const square = (a) => a * a;
console.log("Square value is :", square(5));   //Square value is : 25
