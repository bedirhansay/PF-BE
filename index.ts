import express from "express";
import dotenv from "dotenv";
import { healthRouter, calculatorRouter } from "./src/routes";
import { addTimestamp, errorHandler, logger } from "./src/middlewares";
import { connectDB } from "./src/config/connectDB";

const app = express();

dotenv.config();
app.use(express.json());
app.use(addTimestamp);
app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1>Commist</h1>");
});
app.use("/health", healthRouter);

app.use("/calculator", calculatorRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[-- * Server is running on port * --] ${PORT}`);
});

export default app;
