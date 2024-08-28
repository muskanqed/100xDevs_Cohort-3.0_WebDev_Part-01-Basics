// How promises work under the hood
function random(resolve) {
    // resolve();
}

const p = new Promise(random); // when does the does class eventually complete

function callback() {
    console.log("Promise succeeded");
}

p.then(callback); // it as called the function and completed eventually
