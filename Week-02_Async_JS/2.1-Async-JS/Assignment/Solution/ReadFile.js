const { error } = require("console");
const fs = require("fs");

function readTheFile(resolve, reject) {
    fs.readFile("a.txt", "utf-8", (error, data) => {
        if (error) {
            reject(error);
        }
        else {
            resolve(data)
        }
    })
}


function readFilePromisied() {
    return new Promise(readTheFile);
}

readFilePromisied()
    .then(data => {
        console.log("The file Content: ", data)
    })
    .catch(error => {
        console.error("Error reading file:", error); // Handle errors
    });

