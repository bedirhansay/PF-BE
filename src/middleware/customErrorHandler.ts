import { Request, Response, NextFunction } from "express";
import { logger } from "../helpers"; // Eğer logger'ın türünü tanımladıysanız, bu kısmı uygun şekilde güncelleyin.

export const CustomErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.log(
    "error",
    `Error Message: ${err.message}, Request Method: ${req.method}`
  );

  return res
    .status(500)
    .json({ message: err.message || "Something went wrong!" });
};
