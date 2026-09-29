/***
 What is destructuring?
 Destructuring হলো JavaScript-এর এমন একটি feature, যার মাধ্যমে array বা object থেকে প্রয়োজনীয় value/property সহজে আলাদা করে variable-এর মধ্যে রাখা যায়।  ***/




const fruitArray = ["Apple", "Banana", "Mango", "Jackfruits", "Guava"]
const [first, second, ...remainingFruits] = fruitArray;

console.log(first);  // Apple
console.log(second);  // Banana
console.log(remainingFruits);  // [ 'Mango', 'Jackfruits', 'Guava' ]




const student = {
    name: "Bayjid Alom",
    age: 19,
    address: {
        district: "Mymensingh",
        country: "Bangladesh",
    },
    isSingle: true,
    hasBike: false
}


const {
    name,
    age: myAge,
    address: { district, country } } = student;

    
console.log(name);   // Bayjid Alom
console.log(myAge);    // 19
console.log(country);  // Bangladesh












const employee = {
    employeeId: "EMP-2047",
    fullName: "Bayjid Alom",
    department: "Engineering",
    contact: {
        email: "bayjid@example.com",
        phone: "01700000000"
    },

    designation: "Frontend Trainee",
    workMode: "Remote"
};

const { fullName,
    workMode,
    contact: { email, phone },
    ...anotherInfo } = employee;


console.log(fullName);   // Bayjid Alom
console.log(workMode);   // Remote


console.log(phone);   // 01700000000

console.log(anotherInfo);
/**
 {
  employeeId: 'EMP-2047',
  department: 'Engineering',
  designation: 'Frontend Trainee'
}  **/




