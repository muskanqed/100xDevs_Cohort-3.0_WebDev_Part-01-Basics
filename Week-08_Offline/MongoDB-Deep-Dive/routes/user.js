const express = require("express");

const Router = express.Router;

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {

});

userRouter.post("/signin", async (req, res) => {

});

module.exports = {
    userRouter
}