const fs = require('fs');
function readFileAsync() {
    return new Promise(function (resolve, reject) {
        fs.readFile("b.txt", "utf-8", (error, data) => {
            if (error) {
                console.log("File not found")
                reject(error);
            }
            else {
                resolve(data);
                console.log("File read");
            }
        })
    })
}

async function solve() {
    try {
        const data = await readFileAsync();
        console.log(data);
    }
    catch (error) {
        console.error("The error is", error)
    }

}

solve();