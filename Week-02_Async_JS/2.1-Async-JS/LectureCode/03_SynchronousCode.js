// Syncronous code - code that runs line by line and waits for the current line to finish before moving to the next line for execution.

// function to calculate the sum of numbers from 1 to n
function sum(num) {
  // variable to store the sum
  let ans = 0;

  // loop to iterate from 1 to n
  for (let i = 1; i <= num; i++) {
    // adding the current number to the sum
    ans = ans + i;
  }

  // returning the sum of numbers from 1 to n
  return ans;
}

// calling the function and storing the result in a variable
const ans1 = sum(10);
// printing the result
console.log(ans1);

// calling the function and storing the result in a variable
const ans2 = sum(100);
// printing the result
console.log(ans2);

// calling the function and storing the result in a variable
const ans3 = sum(1000);
// printing the result
console.log(ans3);

// import the fs module
const fs = require("fs");

// read the contents of the file a.txt and store it in the variable contents1 synchronously using the readFileSync method
const contents1 = fs.readFileSync("a.txt", "utf8");
// print the contents of the file a.txt
console.log(contents1);

// read the contents of the file b.txt and store it in the variable contents2 synchronously using the readFileSync method
const contents2 = fs.readFileSync("b.txt", "utf-8");
// print the contents of the file b.txt
console.log(contents2);

// read the contents of the file b.txt and store it in the variable contents3 synchronously using the readFileSync method
const contents3 = fs.readFileSync("b.txt", "utf-8");
// print the contents of the file b.txt
console.log(contents3);