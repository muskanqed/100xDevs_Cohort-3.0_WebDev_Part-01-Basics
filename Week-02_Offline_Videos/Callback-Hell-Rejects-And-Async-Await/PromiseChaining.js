function setTimeOutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    })
}

setTimeOutPromisified(1000).then(function () {
    console.log("Hi");
    return setTimeOutPromisified(3000).then(function () {
        console.log("Hey");
        return setTimeOutPromisified(5000).then(function () {
            console.log("Muskan")
        })
    })
})