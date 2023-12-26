import {
  CreateProject,
  DeleteProject,
  GetProjectById,
  ProjectValidation,
  UpdateProject,
  GetAllProjects,
} from "../models";
import { NextFunction, Request, Response } from "express";

export const getProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allProjects = await GetAllProjects();
    if (allProjects) {
      return res.status(200).json(allProjects);
    } else {
      return res.status(404).send("Henüz hiç proje eklenmedi");
    }
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const getProjectById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ProjectId = req.params.id;

    const Project = await GetProjectById(ProjectId);

    if (!Project) {
      return res.status(404).json("Project not found");
    } else {
      return res.status(200).json(Project);
    }
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postData = req.body;
    const validationResult = ProjectValidation(postData);

    if (validationResult.error) {
      return res.status(400).json(validationResult.error.details[0].message);
    }

    const result = await CreateProject(postData);

    return res.status(201).json("Project oluşturuldu.");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const patchData = req.body;
    const data = await UpdateProject(id, patchData);

    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const existingProject = await DeleteProject(id);

    if (!existingProject) {
      return res.status(404).json("Id bulunamadı.");
    }
    const data = await DeleteProject(id);
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
