/**
 Pass by Value হলো যখন কোনো primitive value function-এর মধ্যে পাঠানো হয়, তখন সেই value-এর একটি copy function-এর parameter-এ যায়। তাই function-এর ভেতরে parameter-এর value পরিবর্তন করলেও মূল variable-এর value পরিবর্তন হয় না। যেমন, একটি Number function-এ পাঠালে তার copy যায় এবং original Number অপরিবর্তিত থাকে।

 Pass by Reference বলতে বোঝায়, যখন কোনো object বা array function-এ পাঠানো হয়, তখন তার value-এর copy না গিয়ে একই reference-এর মাধ্যমে data access করা হয়। তাই function-এর ভেতর থেকে object বা array-এর কোনো property/value পরিবর্তন করলে original object বা array-তেও সেই পরিবর্তন দেখা যায়।  ***/




// pass by value - মূল variable-এর মান অপরিবর্তনশীল থাকে।
let name = "Bayjid";

const myFunc = (value) => {
    value = "Bayjid Alom"
    console.log("Inside function > ", value);
}

myFunc(name)   // Inside function >  Bayjid Alom
console.log(name);  // Bayjid





// Pass by reference - মূল variable-এর মানসহ পরিবর্তন হয়ে যায়।
const car = {
    name: "BMW",
    color: 'red',
    price: 5000000
}

const carFunc = (param) => {
    param.color = "Black"
    console.log(param);
}

carFunc(car)
console.log(car);

