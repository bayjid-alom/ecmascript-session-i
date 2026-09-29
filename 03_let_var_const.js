/***
 হ্যাঁ, var থাকা সত্ত্বেও let আর const আনার মূল কারণ ছিল JavaScript-এর variable declaration-কে আরও predictable এবং safer করা।

কেন let ও const এলো?
পুরোনো JavaScript-এ variable declare করার জন্য মূলত var ব্যবহার করা হতো। কিন্তু var-এর কিছু behavior বড় codebase-এ সমস্যা তৈরি করতে পারত—বিশেষ করে function scope, redeclaration, এবং hoisting নিয়ে।
 */


// var hoisted - undefined (Bad practice)
// let and var hoisted but in Temporal Dead Zone


// var allows redeclaration same variable
var name = "Bayjid Alom";
var name = "Jihad";
console.log(name);  // Jihad



// Reassign
var nationality = "Bangladesh";
nationality = "America"
console.log(nationality);

let age = 18;
age = 19;
console.log(age);


// Can't reassign
// const my_name = "Bayjid Alom";
// my_name = "Bayjid Alom Jihad";
// console.log(my_name);    // TypeError






// Scope
// var maintains only function scope, but not block scope or global scope
// let and const maintain all scope
