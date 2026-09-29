// "" এর ভিতর কিছু রাখলে সেটা শুধু Single line-এ লেখা যায়। 
// Multiline লিখতে template sting (``) ব্যবহার করতে হয়। dynamic করা যায়..${name}
// Ternary Operator ব্যবহার করা যায়...।


const name = "Bayjid Alom";
const age = 19;
const isMarried = false;

// Ternary Operator -> condition ? true : false ;

let aboutMe = `
        My name is ${name}.
        I'm ${age} years old. 
        ${age >= 18 ? "I am an adult." : "I am not an adult."}
        ${age || 100}
`;

console.log(aboutMe);


/**
    My name is Bayjid Alom.
    I'm 19 years old. 
    I am an adult.
    19
**/



/**
|| এখানে fallback value দেওয়ার জন্য ব্যবহার করা হয়েছে।
সহজভাবে বললে, age-এর value যদি থাকে বা truthy হয়, তাহলে age-এর value দেখাবে। কিন্তু age যদি falsy হয়, তাহলে 100 দেখাবে।

যেমন age = 20 হলে → 20
আর age = 0 হলে → 100

অর্থাৎ:
age || 100 → age থাকলে age, না থাকলে 100। ***/




