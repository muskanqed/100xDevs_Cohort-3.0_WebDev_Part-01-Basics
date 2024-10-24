const mongoose = require("mongoose");

const url =
  "mongodb://localhost:27017/todo";
async function connectToDb() {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("database connected succesfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
  connectToDb,
};
