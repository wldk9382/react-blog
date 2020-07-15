const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jia:skd40489@react-blog.bxm8q.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.error("error"));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(5000);
