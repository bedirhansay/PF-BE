import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/connectDB";
import { mainRouter } from "./src/routes";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: ["https://bedirhansaycom.vercel.app", "http://localhost:3000"],
  })
);

app.use(express.json());

// Routes
app.use("/api", mainRouter);

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

export default app;
