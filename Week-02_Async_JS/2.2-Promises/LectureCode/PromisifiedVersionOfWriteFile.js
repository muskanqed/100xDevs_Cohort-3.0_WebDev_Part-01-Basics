const fs = require("fs");

const content = "Hi baby";

function writeInFile(resolve) {
    fs.writeFile("a.txt", content, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Data written successfully")
        }
    })
}

function writeFilePromisified() {
    return new Promise(writeInFile)
}
function callback(contents) {
    console.log("Hello baby")
}
writeFilePromisified().then(callback);

