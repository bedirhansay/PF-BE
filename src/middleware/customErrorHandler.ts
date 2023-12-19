import { logger } from "@helpers";

export const CustomErrorHandler = (err, req, res, next) => {
  logger.log(
    "error",
    `Error Message: ${err.message}, Request Method: ${req.method}`
  );

  return res.send({ message: err.message || "Something went wrong!" });
};
