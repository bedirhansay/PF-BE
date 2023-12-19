import express from "express";
import { healthRouter, calculatorRouter } from "./routes";
import { addTimestamp, errorHandler, logger } from "./middlewares";
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[-- * Server is running on port * --] ${PORT}`);
});

export default app;
