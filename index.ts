import express from "express";

import { calculatorRouter, healthRouter } from "./src/routes/index";
import { addTimestamp, errorHandler, logger } from "./src/middlewares/index";
const app = express();
const port = 3000;

app.use(express.json());
app.use(addTimestamp);
app.use(logger);
app.get("/", (req, res) => {
  res.send("<h1>Commit</h1>");
});
app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
