// map, filter, find, forEach, reduce - Methods

/***
 Loop throw ways :
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    }
    
    for (let number of numbers){
        console.log(number);
        }  **/



let numbers = [10, 20, 30, 40, 50];


// map -- update element of an array
let updateArray = numbers.map((elem, index, array) => elem * 2)

console.log(updateArray);
// [ 20, 40, 60, 80, 100 ]





// filter -- filter multiple elements

let overThirty = numbers.filter(element => element > 30)
console.log("Number > 30 :", overThirty);   // Number > 30 : [ 40, 50 ]


const phones = [
    { brand: "Samsung", model: "Galaxy S25 Ultra", price: 149999 },
    { brand: "Apple", model: "iPhone 16", price: 93000 },
    { brand: "Apple", model: "iPhone 19 Pro Max", price: 250000 },
    { brand: "Google", model: "Pixel 9 Pro", price: 109999 },
    { brand: "OnePlus", model: "OnePlus 13", price: 89999 },
    { brand: "Xioami", model: "Mi 9", price: 15000 },
];

let filterExpensive = phones.filter(phone => phone.price > 100000 && phone.brand.includes("Apple"));
console.log(filterExpensive);
// [ { brand: 'Apple', model: 'iPhone 19 Pro Max', price: 250000 } ]


let expensivePhone = phones.filter(phone => phone.price > 100000);
console.log(expensivePhone);
/**
[
    { brand: 'Samsung', model: 'Galaxy S25 Ultra', price: 149999 },
    { brand: 'Apple', model: 'iPhone 19 Pro Max', price: 250000 },
    { brand: 'Google', model: 'Pixel 9 Pro', price: 109999 }
]  **/








// find -- find a single element
let findForty = numbers.find(element => element == 40);
console.log(findForty);   // 40

let findSeventy = numbers.find(element => element == 70);
console.log(findSeventy);  // undefined


let cheapPhone = phones.find(phone => phone.price > 12000 && phone.brand.includes("Xioami"))
console.log(cheapPhone);
// { brand: 'Xioami', model: 'Mi 9', price: 15000 }










// forEach method
phones.forEach((phone, index, array) => {
    console.log(index, ">", phone.model);
})
/**
 0 > Galaxy S25 Ultra
1 > iPhone 16
2 > iPhone 19 Pro Max
3 > Pixel 9 Pro
4 > OnePlus 13
5 > Mi 9
*/








// Reduce method** summation in one line
// (accumulator, element)
let sum = 0;
phones.forEach((phone) => sum += phone.price)
console.log(sum);    // 707997



const summation = phones.reduce((accumulator, element) => {
    return accumulator + element.price;
}, 0)

console.log("Summation using Reduce : ", summation);






