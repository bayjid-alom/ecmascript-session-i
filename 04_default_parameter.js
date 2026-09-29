// b is set to 1 when no value is provided
// default value না দিলে NaN আসতো...।

function multiply(a = 1, b = 1) {
    const result = a * b;
    return result;
}

const output = multiply(10);
console.log(output);   
