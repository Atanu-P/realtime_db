const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// express app
const app = express();
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/userdb?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0",
    {
      useNewUrlParser: true,
    }
  )
  .then((result) => {
    console.log("connected db");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use(morgan("dev"));

app.listen(3000, () => {
  console.log("localhost: 3000");
});
