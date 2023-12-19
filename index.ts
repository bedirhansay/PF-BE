import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", (req, res) => {
  res.send("whaaaat");
});

app.get("/", (req, res) => {
  res.send("<h1>Bedirhan SAY / Endpoint</h1>");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[-- * Server is running on port * --] ${PORT}`);
});

export default app;
