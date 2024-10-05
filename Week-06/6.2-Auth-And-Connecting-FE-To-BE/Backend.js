const express = require("express");
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const JWT_SECRET = "muskanrandomtoken";
const users = [];

function auth(req, res, next) {
    const token = req.headers.token;
    const decodeInfo = jwt.verify(token, JWT_SECRET);

    const username = decodeInfo.username;
    if (username) {
        req.username = username;
        next();
    }
    else {
        res.json({
            message: "You are not logged in"
        })
    }
}

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Frontend/index.html");
})

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password)

    if (user) {
        res.json({
            msg: "User already exists"
        })
    }
    else {
        users.push({
            username: username,
            password: password
        })
        res.json({
            msg: "You have signed up"
        })
    }
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password)

    if (user) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)

        // We can also send jwt in headers
        // res.header("jwt",token);

        res.json({
            token
        })
    }

})

app.get("/me", auth, (req, res) => {
    const user = users.find(u => u.username === req.username);

    if (user) {
        res.json({
            username: user.username,
            password: user.password
        })
        console.log(user)
    }
    else {
        res.json({
            msg: "Invaild token"
        })
    }
})

app.listen(3000);