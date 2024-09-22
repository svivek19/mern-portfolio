const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const data = require("./routes/data.route");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://viveksivakumarr:omhiXBOgRsRqYyqu@cluster0.m3e1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/data", data);
app.get("/", (req, res) => {
  res.send("Hello World");
});
const PORT = app.listen(5151, () => {
  console.log(`Server running on port 5151`);
});
