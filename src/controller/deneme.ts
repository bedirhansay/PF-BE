import { NextFunction, Request, Response } from "express";

export const getSkills = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.json({ message: "basarili" });
};
