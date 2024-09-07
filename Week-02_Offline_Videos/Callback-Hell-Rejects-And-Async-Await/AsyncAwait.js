// async/await is essentially syntactic sugar on top of Promises. 

function setTimeOutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    })
}
async function solve(){
await setTimeOutPromisified(1000)
console.log("Hi");
await setTimeOutPromisified(3000)
console.log("Hey");
await setTimeOutPromisified(5000)
console.log("Hello");
}

solve();

// This is async remember that 
console.log("after the above")

