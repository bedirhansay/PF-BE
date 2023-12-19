// connectDB.ts
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

let isConnected = false;

export const connectDB = async () => {
  if (!process.env.MONGO_URL) {
    console.error("Missing MongoDB URL in .env file");
    return;
  }

  if (isConnected) {
    console.info("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("Database Connected");
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
