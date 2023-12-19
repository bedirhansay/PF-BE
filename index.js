const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./src/config/connectDB");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", (req, res) => {
  res.send("whaaaat");
});

app.get("/", (req, res) => {
  res.send("Bedirhansayapi");
});

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`[-- * Server is running on port * --] ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("----[Database connection error----]:", err);
  });

module.exports = app;
