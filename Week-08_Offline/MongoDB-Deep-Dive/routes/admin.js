const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router;
const { adminMiddleware } = require("../middleware/admin");
const { adminModel } = require("../db")

const adminRouter = Router();


adminRouter.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    await adminModel.create({
        username,
        email,
        password
    });

    res.json({
        message: "admin created successfully"
    })
});

adminRouter.post('/course', adminMiddleware, async (req, res) => {

})



module.exports = {
    adminRouter
}