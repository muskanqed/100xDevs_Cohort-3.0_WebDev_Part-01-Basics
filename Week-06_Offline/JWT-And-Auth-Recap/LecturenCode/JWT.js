const jwt = require("jsonwebtoken");

const value = {
    name: "Muskan",
    password: 123123
}

const token = jwt.sign(value, "secret");
console.log(token);
