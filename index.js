import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // express.json() yerine express.urlencoded() kullanılmalı

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

export default app;
