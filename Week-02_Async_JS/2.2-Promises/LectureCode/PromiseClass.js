class Promise1 {
    constructor(fn) {
        fn(() => {
            this.resolve();
        })
    }
    then(callback) {
        this.resolve = callback;
    }
}

function setTimeOut(resolve) {
    setTimeout(resolve, 3000)
}

function setTimeOutPromisified() {
    return new Promise1(setTimeOut);
}

function callback() {
    console.log("Hey Mehak");
}

const p = setTimeOutPromisified();
p.then(callback);