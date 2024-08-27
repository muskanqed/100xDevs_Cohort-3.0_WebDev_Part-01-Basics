// Try to create promisified version of setTimeout

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
  console.log("Hi muskan");
}

setTimeoutPromisified(3000).then(callback);


