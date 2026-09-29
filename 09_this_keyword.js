/*
this keyword?
JavaScript-এ this হলো একটি special keyword, যা বর্তমান execution context-এর object/context-কে reference করে।
this-এর value কোথায় এবং কীভাবে function call করা হচ্ছে তার ওপর নির্ভর করে।

Traditional function-এ this-এর value থাকে এবং function কীভাবে call করা হচ্ছে তার ওপর এটি নির্ভর করে। আর arrow function-এর নিজস্ব this থাকে না; এটি outer scope থেকে this গ্রহণ করে।
*/



function myFunc() {
    console.log(this);
}
myFunc()

/***
 <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}

 */



const thisValue = () => {
    console.log(this);   // {}
}
thisValue()




const myFuncArrow = () => {
    console.log(this);
}

let person = {
    name: "Bayjid Alom",
    age: 19,
    showMyInfo: function () {
        // এখানে => ব্যবহার করলে this এর আউটপুট পাওয়া যাবে না।
        console.log(this.name);
    },
}

person.showMyInfo() 
// Bayjid Alom

