require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db");

// Connect to DB
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to DB!");
});

const uploadRoute = require("./routes/upload");
const authRoute = require("./routes/auth");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/upload", uploadRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
