const express = require("express");
const bodyParse = require("body-parser");

const app = express();
// Any one can be used to parse the body in routes
// express.json()/body-parser.json()
// app.use(express.json());
app.use(bodyParse.json());

app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    ans: a + b,
  });
});

app.listen(3000);
