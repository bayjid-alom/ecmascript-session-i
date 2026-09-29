/***
 Callback Function হলো এমন একটি function, যেটিকে অন্য একটি function-এর argument হিসেবে পাঠানো হয়, যাতে প্রয়োজনের সময় সেই function-টি পরে call করা যায়।  ***/


const greet = (name, message, callback) => {
    console.log(`Hi ${name}`);
    callback(message)
}


// callback function
const sayGreetings = (message) => {
    console.log(message);
}

greet("Bayjid", "Good night!", sayGreetings)


/*
Hi Bayjid
Good night!
*/
