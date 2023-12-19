import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const checkAuth = (req, res, next) => {
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) {
    return res.status(500).json({
      message: "JWT_SECRET is not defined in the environment variables.",
    });
  }

  const token =
    req.header("Authorization") &&
    req.header("Authorization").split("Bearer:")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};
