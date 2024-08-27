// import the fs module
const fs = require("fs");

// Method-01
// read the contents of the file a.txt and store it in the variable contents1 asynchronously using the readFile method
fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

// read the contents of the file b.txt and store it in the variable contents2 asynchronously using the readFile method
fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

// read the contents of the file b.txt and store it in the variable contents3 asynchronously using the readFile method
fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

// Method-02
// function to read the file asynchronously
function print(err, data) {
  console.log(data);
}

// read the file a.txt asynchronously and print the content
// file path, encoding, callback function
fs.readFile("a.txt", "utf8", print); // asynchronous

// read the file b.txt asynchronously and print the content
fs.readFile("b.txt", "utf8", print); // asynchronous

console.log("Done!");

/**
 * setTimeout is a function that takes a callback function and a time in milliseconds as arguments.
 * It waits for the specified time and then executes the callback function.
 */

// print Hello! to the console immediately
console.log("Hello!");

// setTimeout(callback, time in ms);
// setTimeout(() => {
//     console.log("I will run after 1s");
// }, 1000);

// function to run after 1s
function timeout() {
  console.log("I will run after 1s");
}

// call setTimeout function with run function and 1000ms as arguments
// setTimeout(callback, time in ms);
setTimeout(timeout, 1000);

console.log("Welcome to Loupe!");

// Callback Stack
function timeout() {
    console.log("Click the button!");
  }
  
  console.log("Hi!");
  
  // IO task 
  setTimeout(timeout, 1000);
  
  console.log("Welcome to Loupe!");
  
  let c = 0;
  
  // CPU intensive task
  for (let i = 0; i < 10000000000; i++) {
      c = c + 1;
  }
  
  console.log("Expensive operation done!");