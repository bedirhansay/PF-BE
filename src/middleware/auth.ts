import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

dotenv.config();

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) {
    return res.status(500).json({
      message: "JWT_SECRET is not defined in the environment variables.",
    });
  }

  const token = req.header("Authorization")
    ? //@ts-ignore
      req.header("Authorization").split("Bearer ")[1]
    : null;

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    //@ts-ignore
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};
