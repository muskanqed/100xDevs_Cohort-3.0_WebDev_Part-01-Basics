const mongoose = require("mongoose");
const { adminModel } = require("../db");



function adminMiddleware(req, res, next) {
    const { username, password } = req.body;

    adminModel.findOne({
        username,
        password
    })
        .then(() => {
            if (value) {
                next()
            }
            else {
                res.status(404).json({
                    message: "Admin does not exists"
                })
            }
        })
}

module.exports = {
    adminMiddleware
}