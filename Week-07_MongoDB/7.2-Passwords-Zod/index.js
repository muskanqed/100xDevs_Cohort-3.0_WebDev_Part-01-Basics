const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

const { UserModel, TodoModel } = require("./db");
const { connectToDb } = require("./dbconnect");
const { auth } = require("./auth.js");

const JWT_SECRET = "muskan123";

function initServer() {
  const app = express();
  app.use(express.json());

  connectToDb();

  app.post("/signup", async function (req, res) {
    try {
      const requestBody = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
        name: zod.string().min(3),
      });

      const safeParsingReq = requestBody.safeParse(req.body);

      // The difference between parse and safeParse is safeParse return 3 thing that is success,data and error in an object and also return the error without crashing the server
      // parse only returns the error you need to put it in try and catch block else the server will fail
      // Use parse if you want an exception to be thrown when validation fails.
      // Use safeParse if you want structured validation errors without crashing the app.

      if (!safeParsingReq.success) {
        return res.status(400).json({
          message: "Incorrect Format",
        });
      }

      const email = req.body.email;
      const password = req.body.password;
      const name = req.body.name;

      const hasedPassword = await bcrypt.hash(password, 5);

      await UserModel.create({
        email: email,
        password: hasedPassword,
        name: name,
      });

      return res.json({
        message: "You are signed up",
      });
    } catch (e) {
      return res.status(400).json({
        message: "Already taken",
      });
    }
  });

  app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
      email: email,
    });

    if (!response) {
      res.json({
        message: "User not found",
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

    if (passwordMatch) {
      const token = jwt.sign(
        {
          id: response._id,
        },
        JWT_SECRET
      );

      res.json({
        token,
      });
    } else {
      res.status(403).json({
        message: "Incorrect creds",
      });
    }
  });

  app.post("/todo", auth, (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    TodoModel.create({
      userId,
      title,
      done,
    });

    res.json({
      message: "Todo created successfully",
      userId,
    });
  });

  app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
      userId,
    });

    if (userId === todos.userId) {
      res.json({
        todos,
      });
    } else {
      res.json({
        message: "Please create one todo",
      });
    }
  });

  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
}

initServer();
