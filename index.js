const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

app.listen(PORT, () => {
  console.log(`[-- * Server is running on port * --] ${PORT}`);
});

module.exports = app;
