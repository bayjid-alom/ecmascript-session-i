/**
 JavaScript-এ == (double equal) হলো loose equality operator। এটি দুইটি value তুলনা করার সময় প্রয়োজনে type conversion করে তারপর comparison করে।
 অন্যদিকে === (triple equal) value এবং data type—দুটিই check করে।
 */


// Loose equality / Double equal

console.log(5 == "5");      // true
console.log(10 == 10);      // true
console.log(10 == "20");    // false
console.log(true == 1);     // true
console.log(false == 0);    // true
console.log(null == undefined); // true

console.log({} == {});            // false
console.log([] == []);            // false



// Triple equal / strict equality
console.log(5 === 5);              // true
console.log(5 === "5");            // false
console.log(true === 1);           // false
console.log(false === 0);          // false
console.log(null === undefined);   // false
console.log(null === null);        // true
console.log(undefined === undefined); // true



