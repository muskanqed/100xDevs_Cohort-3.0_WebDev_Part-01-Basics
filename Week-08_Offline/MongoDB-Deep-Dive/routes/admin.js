const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router;
const { adminMiddleware } = require("../middleware/admin");
const { adminModel, courseModel } = require("../db")

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
    const { title, description, imagelink, price } = req.body;

    const newCourse = await courseModel.create({
        title,
        description,
        imagelink,
        price
    });

    res.json({
        message: "Created successfully the course",
        courseId: newCourse._id
    });
});

adminRouter.get("/course", adminMiddleware, (req, res) => {
    courseModel.find({}).then(function (response) {
        res.json({ courses: response })
    })
});

module.exports = {
    adminRouter
}