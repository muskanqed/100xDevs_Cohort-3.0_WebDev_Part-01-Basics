// Create a middleware function that logs each incoming request’s HTTP method, URL,
// and timestamp to the console

const express = require("express");

const app = express();
function incomingInfo(req, res, next) {
  if (req.method === "GET") {
    console.log(`Received GET requested at ${req.method}`);
    console.log(`Received GET requested at ${req.url}`);
    console.log(`Received GET requested at ${req.hostname}`);

    console.log(new Date());
    next();
  } else {
    console.log(`Received POST requested at ${req.method}`);
    console.log(`Received POST requested at ${req.url}`);
    console.log(new Date());
    next();
  }
}
app.use(incomingInfo);

app.get("/home", (req, res) => {
  res.send("You are in home page at get method");
});

app.post("/about", (req, res) => {
  res.send("You are in home page at post method");
});

app.listen(3000);
