// connectDB.ts
import dotenv from "dotenv";
import { NextFunction } from "express";
import mongoose from "mongoose";

dotenv.config();

import { RequestHandler } from "express";

export const connectDB: RequestHandler = async (req, res, next) => {
  if (!process.env.MONGO_URL) {
    console.error("Missing MongoDB URL in .env file");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
    next();
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
