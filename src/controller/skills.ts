import {
  DeleteSkill,
  GetAllSkills,
  GetSkillById,
  SkillModel,
  SkillValidation,
  UpdateSkill,
} from "../models";
import { NextFunction, Request, Response } from "express";

export const getSkills = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allSkills = await GetAllSkills();
    if (allSkills) {
      return res.status(200).json(allSkills);
    }
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const getSingleSkill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const skillId = req.params.id;

    const skill = await GetSkillById(skillId);

    if (!skill) {
      return res.status(404).json("Skill not found");
    } else {
      return res.status(200).json(skill);
    }
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const createSkill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postData = req.body;
    const validationResult = SkillValidation(postData);

    if (validationResult.error) {
      return res.status(400).json(validationResult.error.details[0].message);
    }

    const result = await SkillModel.create(postData);
    return res.status(201).json("Skill oluşturuldu.");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const updateSkill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const patchData = req.body;

    const data = await UpdateSkill(id, patchData);

    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const deleteSkill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const existingSkill = await GetSkillById(id);

    if (!existingSkill) {
      return res.status(404).json("Id bulunamadı.");
    }
    const data = await DeleteSkill(id);
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
