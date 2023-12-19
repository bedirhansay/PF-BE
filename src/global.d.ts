import "express";

declare module "express" {
  interface Request {
    timestamp?: number;
  }
}

declare module "mongodb" {
  export { ObjectId } from "mongodb";
}
