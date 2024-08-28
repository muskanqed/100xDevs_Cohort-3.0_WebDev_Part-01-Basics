const fs = require("fs");

function readTheFile(finalContents) {
    fs.readFile("a.txt", "utf-8", (error, data) => {
        finalContents(data);
    })
}

function readFile(filename) {
    return new Promise(readTheFile)
}

const p = readFile();

function callback(contents) {
    console.log(contents)
}
p.then(callback)