import express from "express";
import { healthRouter, calculatorRouter } from "./src/routes";
import { addTimestamp, errorHandler, logger } from "./src/middlewares";
const app = express();
const port = 3000;

app.use(express.json());
app.use(addTimestamp);
app.use(logger);
app.get("/", (req, res) => {
  res.send("merhaba");
});
app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
