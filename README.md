## ⚙️ Advanced ES6 ও Core JavaScript Concepts


> 📝 This repository documents my personal journey of learning advanced ES6 and core JavaScript concepts. Every topic has its own `.js` practice file, and the notes below summarize the key ideas in a short, revision-friendly format.

---

### 📑 Table of Contents

- [🗂️ Topics Covered](#-topics-covered)
- [📝 Notes](#-notes)
- [🆚 var vs let vs const](#️-var-vs-let-vs-const)
- [👨‍💻 Author](#-author)

---

### 🗂️ Topics Covered

<details>
<summary>📑 Click to explore — 17 topics and their corresponding files</summary>

<br>

| # | File | Topic |
|---|------|-------|
| 01 | `01_hoisting.js` | Hoisting |
| 02 | `02_scope.js` | Scope |
| 03 | `03_let_var_const.js` | let, var, const |
| 04 | `04_default_pareameter.js` | Default Parameter |
| 05 | `05_template_string.js` | Template String |
| 06 | `06_rest_spread_operator.js` | Rest ও Spread Operator |
| 07 | `07_destructuring.js` | Destructuring |
| 08 | `08_arrow_function.js` | Arrow Function |
| 09 | `09_this_keyword.js` | `this` Keyword |
| 10 | `10_array_operation.js` | Array Operation |
| 11 | `11_object_operation.js` | Object Operation |
| 12 | `12_primitive_non_primitive.js` | Primitive বনাম Non-Primitive |
| 13 | `13_double_triple_equal.js` | `==` বনাম `===` |
| 14 | `14_truthy_falsy.js` | Truthy ও Falsy |
| 15 | `15_closure.js` | Closure |
| 16 | `16_pass_by_value_&_reference.js` | Pass by Value ও Reference |
| 17 | `17_callback_function.js` | Callback Function |

</details>

---



## 📝 Notes

> 👇 যেকোনো topic-এর উপর ক্লিক করলে তার notes expand হবে।

<details>
<summary>📌 <b>01. Hoisting</b></summary>

<br>

**Hoisting** মানে code run হওয়ার *আগেই* JavaScript declaration গুলোকে নিজের scope-এর উপরে তুলে নেয়।
Function declaration পুরোপুরি hoist হয়, তাই লেখার আগেই call করা যায়।
`var` hoist হয়ে `undefined` হয়ে থাকে। `let` ও `const` ও hoist হয়, কিন্তু নিজের line না আসা পর্যন্ত **Temporal Dead Zone (TDZ)**-এ থাকে।

```js
console.log(a); // undefined  (var hoist হয়েছে)
var a = 10;

sayHi(); // "Hi!"  (function declaration পুরো hoist হয়)
function sayHi() {
  console.log("Hi!");
}

console.log(b); // ❌ ReferenceError (TDZ)
let b = 20;
```

#### 🔍 এটা কেন হয়? (Execution Context)

Hoisting হয় কারণ JavaScript code চালানোর আগে একটা **Execution Context** তৈরি করে। শুরুতে তৈরি হয় **Global Execution Context**, যেটা **২টা phase**-এ কাজ করে:

<details>
<summary>🌍 <b>Global Execution Context</b></summary>

<br>

<details>
<summary>1️⃣ <b>Creation Phase</b></summary>

<br>

- Variable ও function-এর জন্য memory বরাদ্দ হয়।
- `var` variable গুলো `undefined` হয়ে থাকে।
- Function declaration গুলো পুরোপুরি store হয়।
- `let` / `const` জায়গা পায় কিন্তু **uninitialized** থাকে (TDZ)।
- `this`-এর মান ঠিক হয়।

</details>

<details>
<summary>2️⃣ <b>Execution Phase</b></summary>

<br>

**Execution Phase** হলো JavaScript-এর সেই ধাপ, যেখানে code-এর statements **একটার পর একটা (line by line)** execute হয়, variable-এ আসল value বসে, function call হয় এবং actual কাজ সম্পন্ন হয়।

</details>

</details>

<details>
<summary>🧠 <b>Memory Heap কী?</b></summary>

<br>

**Memory Heap** হলো সেই জায়গা যেখানে **non-primitive value** (`[]` array, `{}` object, `()` function) store হয়।

```js
const arr = [1, 2, 3];       // heap-এ store হয়
const obj = { name: "Sam" }; // heap-এ store হয়
```

</details>

<details>
<summary>📚 <b>Call Stack কী?</b></summary>

<br>

**Call Stack** ট্র্যাক রাখে এই মুহূর্তে কোন function চলছে। এটা **LIFO** (Last In, First Out) নিয়মে চলে: সবার শেষে ঢোকা function সবার আগে শেষ হয়ে বের হয়ে যায়। Code চলে line by line।

```js
function one() { two(); }
function two() { three(); }
function three() { console.log("Done"); }

one();
// Stack-এ ঢোকার ক্রম: one -> two -> three
// শেষ হওয়ার ক্রম:    three -> two -> one
```

</details>

</details>

<br>

<details>
<summary>📌 <b>02. Scope</b></summary>

<br>

**Scope** ঠিক করে একটা variable *কোথা থেকে* access করা যাবে।
তিন ধরনের scope আছে: **Global**, **Function** ও **Block** scope।
JavaScript **lexical scoping** মানে: ভেতরের scope বাইরের variable দেখতে পায়, কিন্তু বাইরের scope ভেতরের variable দেখতে পায় না।

```js
let globalVar = "আমি global";

function test() {
  let funcVar = "আমি function-এর ভেতরে";
  if (true) {
    let blockVar = "আমি block-এর ভেতরে";
    console.log(globalVar, funcVar, blockVar); // সবগুলো access করা যায়
  }
  console.log(blockVar); // ❌ ReferenceError
}
```

</details>

<br>

<details>
<summary>📌 <b>03. let, var, const</b></summary>

<br>

`var` function-scoped এবং একই নামে আবার declare করা যায়। `let` ও `const` block-scoped (ES6-এ এসেছে)।
`let`-এ নতুন value assign করা যায়, `const`-এ যায় না (তবে object-এর ভেতরের data বদলানো যায়)।
সাধারণ নিয়ম: default-ভাবে `const`, value বদলালে `let`, আর `var` এড়িয়ে চলা।

```js
var x = 1;   var x = 2;   // ✅ redeclare করা যায়
let y = 1;   y = 5;       // ✅ reassign করা যায়
const z = 1; z = 5;       // ❌ TypeError

const user = { name: "Ali" };
user.name = "Sam"; // ✅ চলবে (ভেতরের data বদলানো, reassign নয়)
```

> 📊 পুরো তুলনার table নিচের [var vs let vs const](#-var-vs-let-vs-const) section-এ আছে।

</details>

<br>

<details>
<summary>📌 <b>04. Default Parameter</b></summary>

<br>

Argument না দিলে বা `undefined` দিলে function-এর parameter একটা default (আগে থেকে ঠিক করা) মান নেয়।
Default শুধু `undefined`-এর জন্য কাজ করে, `null`-এর জন্য **নয়**।
আগের parameter ব্যবহার করেও default ঠিক করা যায়।

```js
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

greet();                // "Hello, Guest!"
greet("Rahim");         // "Hello, Rahim!"
greet(undefined, "Hi"); // "Hi, Guest!"
greet(null);            // "Hello, null!"  (null দিলে default কাজ করে না)
```

</details>

<br>

<details>
<summary>📌 <b>05. Template String</b></summary>

<br>

Template string-এ quote-এর বদলে **backtick** (`` ` ``) ব্যবহার করা হয়।
`${ }`-এর ভেতরে variable বা যেকোনো expression বসানো যায়।
`\n` ছাড়াই **multi-line** string লেখা যায়।

```js
const name = "Rahim";
const age = 20;

console.log(`আমার নাম ${name}, বয়স ${age} বছর।`);
console.log(`আগামী বছর আমার বয়স হবে ${age + 1}।`);

const msg = `প্রথম line
দ্বিতীয় line`; // multi-line
```

</details>

<br>

<details>
<summary>📌 <b>06. Rest ও Spread Operator</b></summary>

<br>

দুটোর syntax একই `...`, কিন্তু কাজ উল্টো।
**Rest** অনেকগুলো value-কে *জড়ো করে* একটা array বানায় (function parameter বা destructuring-এ)।
**Spread** একটা array বা object-কে *ছড়িয়ে* আলাদা আলাদা item বানায় (function call, array, object-এ)।

```js
// REST: জড়ো করা
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// SPREAD: ছড়িয়ে দেওয়া
const a = [1, 2];
const b = [...a, 3, 4];          // [1, 2, 3, 4]
const obj = { x: 1 };
const copy = { ...obj, y: 2 };   // { x: 1, y: 2 }
```

</details>

<br>

<details>
<summary>📌 <b>07. Destructuring</b></summary>

<br>

Destructuring দিয়ে array-এর value বা object-এর property আলাদা আলাদা variable-এ খুলে নেওয়া যায়।
Array-তে **position** দেখে, object-এ **property-র নাম** দেখে value নেওয়া হয়।
নতুন নাম দেওয়া, default value বসানো এবং nested data থেকে নেওয়াও যায়।

```js
// Array
const [first, second, ...others] = [10, 20, 30, 40];

// Object: rename + default
const user = { name: "Sam", age: 22 };
const { name: userName, city = "Dhaka" } = user;

// Nested
const { address: { zip } } = { address: { zip: 7400 } };

// Temp variable ছাড়াই swap
let p = 1, q = 2;
[p, q] = [q, p];
```

</details>

<br>

<details>
<summary>📌 <b>08. Arrow Function</b></summary>

<br>

Arrow function হলো function লেখার সংক্ষিপ্ত syntax।
`{ }` ছাড়া লিখলে **implicit return** হয়, মানে `return` লিখতে হয় না।
এর নিজস্ব `this` নেই, আশেপাশের scope থেকে `this` নেয়।

```js
const add = (a, b) => a + b;             // implicit return
const square = n => n * n;               // একটা param হলে () লাগে না
const getUser = () => ({ name: "Sam" }); // object return করতে () দিয়ে মুড়তে হয়
```

</details>

<br>

<details>
<summary>📌 <b>09. this Keyword</b></summary>

<br>

`this` সেই object-কে বোঝায় যে function-কে **call** করছে। অর্থাৎ function *কীভাবে call হলো* তার উপর `this`-এর মান নির্ভর করে।
Method-এর ভেতরে `this` হলো সেই object। সাধারণ function-এ strict mode-এ `undefined`, নাহলে `window`/`globalThis`।
Arrow function নিজের parent scope থেকে `this` নেয়।

```js
const person = {
  name: "Rahim",
  normal() { console.log(this.name); },     // "Rahim"
  arrow: () => { console.log(this.name); }, // person object নয়!
};

person.normal();
person.arrow();

// হারিয়ে যাওয়া this ঠিক করা: bind
const fn = person.normal;
fn();                // this হারিয়ে গেছে
fn.bind(person)();   // "Rahim"
```

</details>

<br>

<details>
<summary>📌 <b>10. Array Operation</b></summary>

<br>

জনপ্রিয় array method: `map`, `filter`, `reduce`, `find`, `some`, `every`, `forEach`, `includes`, `sort`।
`map` প্রতিটা item বদলায়, `filter` শর্ত মিললে রাখে, `reduce` সব মিলিয়ে একটা value বানায়।
`map`, `filter`, `reduce` নতুন result দেয় এবং মূল array বদলায় না।

```js
const nums = [1, 2, 3, 4, 5];

nums.map(n => n * 2);                // [2, 4, 6, 8, 10]
nums.filter(n => n % 2 === 0);       // [2, 4]
nums.reduce((acc, n) => acc + n, 0); // 15
nums.find(n => n > 3);               // 4
nums.some(n => n > 4);               // true
nums.every(n => n > 0);              // true
nums.includes(3);                    // true
```

</details>

<br>

<details>
<summary>📌 <b>11. Object Operation</b></summary>

<br>

`Object.keys()`, `Object.values()` ও `Object.entries()` দিয়ে object-এর data array হিসেবে পাওয়া যায়।
`Object.assign()` ও spread operator দিয়ে object copy বা merge করা যায় (shallow copy)।
`Object.freeze()` পরিবর্তন আটকায়; `?.` (optional chaining) দিয়ে গভীর property নিরাপদে পড়া যায়।

```js
const user = { name: "Sam", age: 22 };

Object.keys(user);    // ["name", "age"]
Object.values(user);  // ["Sam", 22]
Object.entries(user); // [["name","Sam"], ["age",22]]

const merged = { ...user, city: "Dhaka" };

Object.freeze(user);
user.age = 30; // ignore হয় (strict mode-এ error)

console.log(user?.address?.zip); // undefined (crash করে না)
```

</details>

<br>

<details>
<summary>📌 <b>12. Primitive বনাম Non-Primitive</b></summary>

<br>

**Primitive:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`। এগুলো **value দিয়ে** store হয় এবং বদলানো যায় না (immutable)।
**Non-primitive:** object, array, function। এগুলো **heap**-এ থাকে এবং **reference দিয়ে** access হয়।
Primitive copy করলে স্বাধীন copy হয়; non-primitive copy করলে শুধু reference copy হয়।

```js
let a = 10;
let b = a;
b = 20;
console.log(a); // 10  (স্বাধীন)

const arr1 = [1, 2];
const arr2 = arr1;
arr2.push(3);
console.log(arr1); // [1, 2, 3]  (একই reference!)
```

</details>

<br>

<details>
<summary>📌 <b>13. == বনাম ===</b></summary>

<br>

`==` (loose equality) **type convert (coercion)** করার পর value মেলায়।
`===` (strict equality) **value ও type** দুটোই মেলায়, কোনো convert করে না।
Best practice: সবসময় `===` ব্যবহার করো।

```js
5 == "5";           // true   (string number-এ convert হয়)
5 === "5";          // false  (type আলাদা)
null == undefined;  // true
null === undefined; // false
NaN === NaN;        // false (Number.isNaN() ব্যবহার করো)
```

</details>

<br>

<details>
<summary>📌 <b>14. Truthy ও Falsy</b></summary>

<br>

Boolean context-এ (যেমন `if`-এর ভেতরে) প্রতিটা value হয় **truthy** নয়তো **falsy**।
মোট **৮টি falsy value** আছে: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`।
বাকি সবকিছু truthy, এমনকি `"0"`, `"false"`, `[]` এবং `{}` ও।

```js
if ("hello") console.log("truthy"); // চলবে
if (0) console.log("never");        // চলবে না
if ([]) console.log("truthy");      // খালি array ও truthy!

const name = "" || "Guest";  // "Guest"
const count = 0 ?? 10;       // 0  (?? শুধু null/undefined দেখে)
```

</details>

<br>

<details>
<summary>📌 <b>15. Closure</b></summary>

<br>

**Closure** হলো এমন একটা function যে বাইরের function-এর variable *মনে রাখে*, এমনকি বাইরের function শেষ হয়ে যাওয়ার পরেও।
এক function-এর ভেতরে আরেক function তৈরি হলেই closure তৈরি হয়।
ব্যবহার: data privacy, counter এবং function factory।

```js
function makeCounter() {
  let count = 0;            // private variable
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2  (count মনে আছে)
```

**কীভাবে কাজ করে:** `makeCounter()` শেষ হয়ে গেলেও ফেরত আসা ভেতরের function `count`-এর reference ধরে রাখে। তাই `count` memory-তে বেঁচে থাকে, কিন্তু বাইরে থেকে সরাসরি access করা যায় না। এভাবেই এটা সত্যিকারের private হয়।

</details>

<br>






<details>
<summary>📌 <b>16. Pass by Value ও Reference</b></summary>

<br>

**Primitive** পাঠানো হয় **value দিয়ে**: function একটা copy পায়, তাই মূল value কখনো বদলায় না।
**Object/array** পাঠানো হয় **reference-এর copy দিয়ে**: ভেতরের data বদলালে মূল object-এও বদলায়।
কিন্তু parameter-এ নতুন object assign করলে মূল object-এ কোনো প্রভাব পড়ে না।

```js
function changePrimitive(x) { x = 100; }
let num = 10;
changePrimitive(num);
console.log(num); // 10

function changeObject(o) { o.name = "Changed"; }
const person = { name: "Sam" };
changeObject(person);
console.log(person.name); // "Changed"

function reassign(o) { o = { name: "New" }; }
reassign(person);
console.log(person.name); // "Changed" (reassign-এর প্রভাব বাইরে পড়েনি)
```

</details>

<br>







<details>
<summary>📌 <b>17. Callback Function</b></summary>

<br>

**Callback** হলো এমন function যেটা অন্য function-এর argument হিসেবে পাঠানো হয়, পরে call হওয়ার জন্য।
Asynchronous JavaScript-এর ভিত্তি callback (`setTimeout`, event, array method)।
অনেক callback একটার ভেতর আরেকটা বসালে **callback hell** হয়, যার সমাধান Promise ও `async/await`।

```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}
greet("Sam", () => console.log("Callback চলেছে!"));

setTimeout(() => console.log("১ সেকেন্ড পরে চলবে"), 1000);

[1, 2, 3].forEach(n => console.log(n)); // forEach একটা callback নেয়
```

</details>

---







### 🆚 var vs let vs const

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function Scope | Block Scope | Block Scope |
| Reassign | ✅ Yes | ✅ Yes | ❌ No |
| Redeclare | ✅ Yes | ❌ No | ❌ No |
| Hoisting | ✅ Yes | ✅ Yes | ✅ Yes |
| Temporal Dead Zone (TDZ) | ❌ No | ✅ Yes | ✅ Yes |
| Must initialize | ❌ No | ❌ No | ✅ Yes |
| Introduced | JavaScript 1.0 | ES6 | ES6 |

---
<br>



### 👨‍💻 Author

**Bayjid Alom**

> I keep learning, improving, and moving forward.

