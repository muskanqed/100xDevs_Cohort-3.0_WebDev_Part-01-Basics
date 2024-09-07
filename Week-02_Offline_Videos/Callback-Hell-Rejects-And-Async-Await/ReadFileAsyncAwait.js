const { error } = require('console');
const fs = require('fs');

function readFileAysnc() {
    return new Promise(function (resolve) {
        fs.readFile("a.txt", "utf-8", (error, data) => {
            resolve(data)
        })
    })
}

async function solve() {
    const data = await readFileAysnc();
    console.log(data);
}

solve();