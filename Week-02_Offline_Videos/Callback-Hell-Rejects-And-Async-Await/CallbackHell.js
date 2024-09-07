// Callback Hell

// setTimeout(() => {
//   console.log("Hi");
//   setTimeout(() => {
//     console.log("Hello")
//     setTimeout(() => {
//         console.log("Hey")
//     }, 5000);
//   }, 3000);  
// }, 1000);


// Without callback hell the above can be defined

function step3Done() {
    console.log("Hey");
}

function step2Done() {
    console.log("Hello");
    setTimeout(step3Done, 5000);
}

function step1Done() {
    console.log("Hi");
    setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);


// setTimeout(() => {
//     console.log("1 second completed");
// }, 1000);

// setTimeout(() => {
//    console.log("3 seconds completed");
// }, 3000);

// setTimeout(() => {
//     console.log("5 seconds completed");
//  }, 5000);