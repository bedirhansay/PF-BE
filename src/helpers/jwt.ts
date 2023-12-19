import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { IGenerateToken } from "../types";

dotenv.config();

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables.");
}

export const generateToken = (payload: IGenerateToken) => {
  return jwt.sign(payload, JWT_SECRET);
};
