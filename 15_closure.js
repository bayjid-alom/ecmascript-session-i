/**
Closure হলো যখন একটি inner function তার বাইরের function-এর variable-কে মনে রাখে এবং পরে ব্যবহার করতে পারে, যদিও বাইরের function-এর কাজ শেষ হয়ে গেছে।  

Lexical Scope হলো JavaScript-এ কোনো variable কোথায় declare করা হয়েছে, তার ওপর ভিত্তি করে সেই variable কোথা থেকে access করা যাবে—এই নিয়ম।
***/


function outerFunction() {

    let count = 0;
    function innerFunction() {
        count++;
        console.log(count);
    }

    return innerFunction;
}

const counter = outerFunction()
counter()  // 1
counter()  // 2
counter()  // 3








function deductLifeCounter(studentName) {
    let life = 3;

    let lefeDecutExecute = () => {
        if (life > 0) {
            life--;
            console.log(`${studentName}, you lost a life. Life remaining ${life}`);
        }
        else {
            console.log(`${studentName}, your life is over. No life left!`);
        }
    }

    return lefeDecutExecute;
}

let bayjidAlom = deductLifeCounter("Bayjid Alom");
let jubaeidAlom = deductLifeCounter("Jubaeid Alom");



bayjidAlom()  // 2
bayjidAlom()  // 1
jubaeidAlom()  // 2

jubaeidAlom()  // 1
bayjidAlom()  // 0
bayjidAlom()  // Bayjid Alom, your life is over. No life left!

jubaeidAlom()  // 0
jubaeidAlom()  // Jubaeid Alom, your life is over. No life left!