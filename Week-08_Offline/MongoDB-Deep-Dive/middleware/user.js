
const mongoose = require("mongoose");
const { userModel } = require("../db");



function userMiddleware(req, res, next) {
    const { username, password } = req.body;

    userModel.findOne({
        username,
        password
    })
        .then((value) => {
            if (value) {
                next()
            }
            else {
                res.status(404).json({
                    message: "user does not exists"
                })
            }
        })
}

module.exports = {
    userMiddleware
}