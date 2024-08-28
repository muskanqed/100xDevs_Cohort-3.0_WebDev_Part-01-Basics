const fs = require("fs");

const content = "Hi Darling";

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
    console.log(contents)
}
writeFilePromisified().then;