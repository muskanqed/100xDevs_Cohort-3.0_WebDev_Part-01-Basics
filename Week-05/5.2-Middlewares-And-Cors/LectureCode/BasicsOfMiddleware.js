const express = require("express");

const app = express();

let reqCount = 0;

function reqIncreaser(req, res, next) {
    reqCount++;
    req.name = "RandomMuskan"
    console.log(`The total request is ${reqCount}`)
    req.reqCount = reqCount
    next()
}

function realSumHandler(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    console.log(req.reqCount)
    console.log(req.name)
    res.json({
        ans: a + b
    })
}

app.use(reqIncreaser)

app.get('/add/:a/:b', realSumHandler)

app.get('/multiply/:a/:b', (req, res) => {
    const a = req.params.a;
    const b = req.params.b;

    res.json({
        ans: a * b
    })
})

app.listen(3000)