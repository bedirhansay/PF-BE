import { GetAbout, UpdateAbout, CreateAbout } from "../models";
import { NextFunction, Request, Response } from "express";

export const getAbout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allSkills = await GetAbout();

    if (allSkills) {
      return res.status(200).json(allSkills);
    }
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const createAbout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postData = req.body;

    const result = await CreateAbout(postData);
    return res.status(201).json("About oluşturuldu.");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const updateAbout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const patchData = req.body;
    const id = patchData._id;
    const data = await UpdateAbout(id, patchData);
    
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
