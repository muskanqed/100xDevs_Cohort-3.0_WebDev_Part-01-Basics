// Promise Class gives you a promise that i will return you something in the future
// Defining a Promise is hard
// Use promise is easy

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Call version
// function callback() {
//   console.log("Hi muskan!");
// }

// setTimeout(callback, 3000);

// Promisified Version

function waitFor3S(resolve) {
    //   console.log(resolve)
    setTimeout(resolve, 3000);
}

waitFor3S(function main() {
    console.log("Hi Alice");
});

// Actual promise
function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
    console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback);
