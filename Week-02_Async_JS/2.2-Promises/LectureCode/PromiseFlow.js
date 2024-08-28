
function setTimeOut(resolve) {
    console.log("Function called")
    setTimeout(resolve, 3000);
    console.log("Timeout completed")
}

function setTimeoutPromisified() {
    console.log("Promise is called")
    return new Promise(setTimeOut);
}

function callback() {
    console.log("3 seconds are completed");
}

setTimeoutPromisified().then(callback);