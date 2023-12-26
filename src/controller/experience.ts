import {
  CreateExperience,
  DeleteExperience,
  GetExperienceById,
  ExperienceValidation,
  UpdateExperience,
  GetAllExperiences,
} from "../models";
import { NextFunction, Request, Response } from "express";

export const getExperiences = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allExperiences = await GetAllExperiences();
    if (allExperiences) {
      return res.status(200).json(allExperiences);
    } else {
      return res.status(404).send("Henüz hiç deneyim eklenmedi");
    }
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const getExperienceById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ExperienceId = req.params.id;

    const Experience = await GetExperienceById(ExperienceId);

    if (!Experience) {
      return res.status(404).json("Experience not found");
    } else {
      return res.status(200).json(Experience);
    }
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const createExperience = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postData = req.body;
    const validationResult = ExperienceValidation(postData);

    if (validationResult.error) {
      return res.status(400).json(validationResult.error.details[0].message);
    }

    const result = await CreateExperience(postData);

    return res.status(201).json("Experience oluşturuldu.");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const updateExperience = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const patchData = req.body;

    const id = req.params.id;
    const data = await UpdateExperience(id, patchData);

    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const deleteExperience = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const existingExperience = await DeleteExperience(id);

    if (!existingExperience) {
      return res.status(404).json("Id bulunamadı.");
    }
    const data = await DeleteExperience(id);
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
