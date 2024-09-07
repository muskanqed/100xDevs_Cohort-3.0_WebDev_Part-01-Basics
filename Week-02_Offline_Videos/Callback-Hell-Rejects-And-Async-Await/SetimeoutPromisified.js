

function setTimeOutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

function callback() {
    console.log("Hey Muskan");
}


setTimeOutPromisified(1000).then(callback);