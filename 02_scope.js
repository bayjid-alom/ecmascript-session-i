/***
What is Scope?
Scope is the boundary in JavaScript that determines where a variable, function, or value can be accessed and where it cannot be accessed.

- Three types of scope :
1. Global scope
2. Block scope
3. Function scope or local scope

Scope হলো JavaScript-এ এমন একটি গণ্ডি বা সীমা, যা নির্ধারণ করে কোনো variable, function বা value কোথা থেকে access করা যাবে এবং কোথা থেকে করা যাবে না।
 */



// Global scope
let name = "Bayjid Alom Jihad";
let isMarried = false;

if (true) {
    console.log(name); 
}
// Bayjid Alom Jihad


for(let i = 0; i< 5; i++){
    console.log(isMarried);
}
/*
false
false
false
false
false
*/







// {Block scope}
// var not maintains block scope
// let and const maintains block scope

{
    var age = 18;
    let number = 20;
}

console.log(age);   //18 (used var)
// console.log(number);   //ReferenceError:






// Function/local scope
// let, var and const all are maintaining function scope

function my_func() {
    // var test = "Test";
}

// console.log(test);   // ReferenceError:


