/**
 JavaScript-এ Object হলো এমন একটি data structure যেখানে কোনো একটি entity বা বিষয় সম্পর্কিত একাধিক তথ্য key-value pair আকারে একসাথে রাখা হয়। প্রতিটি key একটি property-এর নাম এবং তার সাথে থাকা value সেই property-এর actual data। যেমন একটি product-এর name, brand, price ইত্যাদি আলাদা আলাদা variable-এ না রেখে একটি object-এর মধ্যে রাখা যায়।  **/


let person = {
    name: "Bayjid Alom",
    age: 19,
    getInfo: () => {
        console.log(`My name is ${person.name}`);
    },
    address: {
        district: "Mymensingh",
        country: "Bangladesh",
        street: {
            name: "College Road",
            house: "House 12",
            area: "Maskanda"
        }
    },

}

// Nested - optional chaining (?.)
// console.log(person.address.road.area);  // TypeError

console.log(person.address?.road?.area);   // undefined - road নামের property নেই


// Dot natation
console.log(person.name);
console.log(person.age);


// Bracket notaion
console.log(person["name"]);

// or, dynamically
let name = "name";
console.log(person[name]);






const products = {
    name: "Wireless Headphones",
    brand: "Sony",
    price: 12999,
    category: "Electronics",
    stock: 25
};



let values = Object.values(products)

for (const key in products) {
    const values = products[key];
    console.log(key, ">", values);
}
/**
 name > Wireless Headphones
brand > Sony
price > 12999
category > Electronics
stock > 25  **/


let keys = Object.keys(products)
console.log("Keys Length :", keys.length);   // Keys Length : 5

for (let key of keys) {
    console.log(key);
}







const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2025,
    color: "Black",
    engine: "2.5L",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "15 km/L"
};


// freeze() - prevent insert, delete and update
// Object.freeze(car)

delete car.year;      // property deleted
car.engine = "3.5L";    // Value update
// console.log(car);



// seal()  - Only modify property values
Object.seal(car)

delete car.transmission;
delete car.engine;
delete car.color;

car.mileage = "25 km/L";   // only value changed
car.color = "Blue";      // only value changed

console.log(car);








