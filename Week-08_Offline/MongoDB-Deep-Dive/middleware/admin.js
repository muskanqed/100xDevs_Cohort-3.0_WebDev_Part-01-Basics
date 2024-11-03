const mongoose = require("mongoose");
const { adminModel } = require("../db");



function adminMiddleware(req, res, next) {
    const { email, password } = req.headers;

    adminModel.findOne({
        email,
        password
    }).then((value) => {
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