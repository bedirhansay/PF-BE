import {
  DeleteSkill,
  GetAllSkills,
  GetSkillById,
  SkillModel,
  SkillValidation,
  UpdateSkill,
} from "@models";
import { NextFunction, Request, Response } from "express";

export const getSkills = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allSkills = await GetAllSkills();
    if (allSkills) {
      return res.status(200).json({ status: 200, data: allSkills });
    }
  } catch (error) {
    console.error("Hata:", error);
    return res.status(500).json({ status: 500, error: "Bir hata oluştu." });
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
      return res.status(404).json({ status: 404, message: "Skill not found" });
    } else {
      return res.status(200).json({ status: 200, message: skill });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, error: error.message });
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
      return res.status(400).json({
        status: 400,
        error: validationResult.error.details[0].message,
      });
    }

    const result = await SkillModel.create(postData);
    return res.status(201).json({ status: 201, message: "Skill oluşturuldu." });
  } catch (error) {
    console.error("Hata:", error);
    return res.status(500).json({ status: 500, error: error.message });
  }
};

export const updateSkill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const patchData = req.body;

    const id = patchData._id;
    const data = await UpdateSkill(id, patchData);

    return res.status(200).json({ status: 200, message: "Skill updated" });
  } catch (err) {
    console.error("Hata:", err);
    return res.status(500).json({ status: 500, error: err.message });
  }
};

export const deleteSkill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const del = req.body;
    const id = del._id;
    const existingSkill = await GetSkillById(id);

    if (!existingSkill) {
      return res.status(404).json({ status: 404, message: "Id bulunamadı." });
    }

    const data = await DeleteSkill(id);
    return res.status(200).json({ status: 200, data: data });
  } catch (error) {
    console.error("Hata:", error);
    return res.status(500).json({ status: 500, error: error.message });
  }
};
