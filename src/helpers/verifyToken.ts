import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { getUserById } from "../models";


export const verifyToken = (
  token: string,
  JWT_SECRET: string,
  res: Response,
  next: NextFunction
) => {
  jwt.verify(token, JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Not a valid token" });
    }

    try {
      // @ts-ignore
      const { id } = decoded;
      const user = await getUserById(id);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  });
};
