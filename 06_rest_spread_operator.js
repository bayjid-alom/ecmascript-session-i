/**
Rest Operator (...) হলো JavaScript-এর এমন একটি feature, যা একাধিক value-কে একসাথে সংগ্রহ করে একটি array বা object-এর মধ্যে রাখে। _ (a, b, c, d, ...rest)

Spread Operator (...) হলো JavaScript-এর এমন একটি feature, যা কোনো array বা object-এর values/elements-কে ছড়িয়ে (spread) দেয়। _ (...numbers) ***/



// Rest operator
// 1 2 3 4 [ 10, 20 ]
function myFunc(a, b, c, d, ...rest) {
    console.log(a, b, c, d, rest);
}

myFunc(1, 2, 3, 4, 10, 20)





// Spread operator  ...Refference ধরে রাখে না।

const numbers = [10, 20, 30, 40, 50];
console.log(...numbers);  // 10 20 30 40 50


const arr1 = [30, 40, 50, 60];
//const arr2 = arr1; -এভাবে দিলে Refference ধরে রাখবে। উভয় array এর value change হয়ে যাবে।
const arr2 = [...arr1]
arr2.push(100)
console.log(arr1);   // [ 30, 40, 50, 60 ]
console.log(arr2);   // [ 30, 40, 50, 60, 100 ]




const student_1 = {
    name: "Bayjid Alom",
    roll: 19,
    isMarried: false
}

// console.log(...student); // TypeError

const student_2 = { ...student_1 };
console.log(student_2);




console.log(Math.max(100, 200, 300, 400, 500, 1000)) // 1000

const numbersArray = [100, 200, 300, 400, 500];
console.log(Math.max(...numbersArray));  // 500
console.log(Math.min(...numbersArray));  // 100






