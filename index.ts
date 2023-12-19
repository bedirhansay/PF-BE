import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mainRouter } from "./src/routes";
import { CustomErrorHandler } from "./src/middleware";
import { connectDB } from "./src/config/connectDB";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use("/api", mainRouter);

app.get("/", (req, res) => {
  res.send("Bedirhansayapi");
});

app.use(CustomErrorHandler);

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
