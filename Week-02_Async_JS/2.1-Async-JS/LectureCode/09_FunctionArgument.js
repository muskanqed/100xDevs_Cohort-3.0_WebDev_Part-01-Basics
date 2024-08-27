// function to add two numbers
function sum(a, b) {
  return a + b;
}

// function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// function to divide two numbers
function divide(a, b) {
  return a / b;
}

// function to do an operation on two numbers
function doOperation(a, b, op) {
  // return op(a, b);
  let val = op(a, b);
  return val;
}

// Method-01
// print the sum of 1 and 2
console.log(sum(1, 2));

// print the multiplication of 2 and 5
console.log(multiply(2, 5));

// Method-02
// call doOperation function with 1, 2, and sum function
let ans1 = doOperation(1, 2, sum);

// print the result
console.log(ans1); // 3

// call doOperation function with 1, 2, and divide function
let ans2 = doOperation(1, 2, divide);

// print the result
console.log(ans2); // 0.5
