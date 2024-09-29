const express = require("express");
const path = require("path");
// const cors = require("cors")

const app = express();

app.use(express.json());
// app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/A4.html"));
});

app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    ans: a + b,
  });
});

app.listen(3000);
