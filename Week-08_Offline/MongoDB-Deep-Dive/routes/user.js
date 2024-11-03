const express = require("express");
const mongoose = require("mongoose");
const { userModel, courseModel } = require("../db");
const { userMiddleware } = require("../middleware/user")

const Router = express.Router;

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    await userModel.create({
        username,
        email,
        password
    });

    res.json({
        message: "user created successfully"
    })
});

userRouter.get("/course", async (req, res) => {
    courseModel.find({}).then(function (response) {
        res.json({ courses: response })
    })
});
userRouter.post("/course/:courseId", userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const email = req.headers.email;
    const password = req.headers.password;

    try {
        const updateResult = await userModel.updateOne(
            { email, password },
            { "$push": { purchasedCourses: courseId } }
        );

        if (updateResult.modifiedCount === 0) {
            return res.status(400).json({ message: "Course purchase failed. It may already be in your purchased list." });
        }

        res.json({ message: "Purchased successfully" });
    } catch (error) {
        console.error("Error updating purchased courses:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

userRouter.get("/purchasedCourses", userMiddleware, async (req, res) => {
    const user = await userModel.findOne({
        email: req.headers.email
    });

    const courses = await courseModel.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses
    })
})


module.exports = {
    userRouter
}