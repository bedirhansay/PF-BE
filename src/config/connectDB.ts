// connectDB.ts
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

let isConnected = false;

export const connectDB = async () => {
  if (!process.env.MONGO_URL) {
    console.error("Missing MongoDB URL in .env file");
    throw new Error("Missing MongoDB URL in .env file");
  }

  if (isConnected) {
    console.info("MongoDB connection already established");
    return "MongoDB connection already established";
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("Database Connected");
    return "Database Connected";
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    throw new Error(`Error: ${error.message}`);
  }
};
