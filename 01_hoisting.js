/**
What is hoisting?

Hoisting is a JavaScript behavior where, before executing the code, JavaScript moves the declarations of certain variables and functions to the top of their scope in memory.

Hoisting হলো JavaScript-এর এমন একটি behavior যেখানে code execute করার আগে JavaScript কিছু variable ও function declaration-এর information memory-তে তুলে রাখে।
**/



// var is hoisted, but only the declaratioon, not the value assignment
console.log(value);  // undefined
var value = 120;
console.log(value);  // 120




// let and const also hoisted, but initialization not hoisted
// They are in a "Temporal Dead Zone - TDZ" from the start of the block until the declaration line.

// console.log(name);   // ReferenceError:
let name = "Bayjid Alom";
console.log(name);



// console.log(age);   // ReferenceError:
const age = 19;




