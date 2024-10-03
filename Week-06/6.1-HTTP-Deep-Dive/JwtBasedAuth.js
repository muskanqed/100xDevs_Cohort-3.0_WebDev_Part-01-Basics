const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const JWT_SECRET = "randommuskankey"

app.use(express.json());

let users = [];


app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password)
    if (user) {
        res.json({
            msg: "Account already exits"
        })
    }
    else {
        users.push({
            username: username,
            password: password
        })
        console.log(users)
        res.json({
            msg: "You have signed up"
        })
    }

});

app.post("/signin", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password)

    if (user) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)
        res.send({
            token
        })
    }
    else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const decodeInfo = jwt.verify(token, JWT_SECRET);

    const username = decodeInfo.username;

    const user = users.find(u => u.username === username);

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
