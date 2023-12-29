import express from "express";
import {
  createProject,
  deleteProject,
  getProjects,
  getProjectById,
  updateProject,
} from "../controller";
import { checkAuth } from "../middleware";

const ProjectsRouter = express.Router();

ProjectsRouter.get("/", getProjects);
ProjectsRouter.get("/:id", getProjectById);
ProjectsRouter.post("/", checkAuth, createProject);
ProjectsRouter.patch("/:id", checkAuth, updateProject);
ProjectsRouter.delete("/:id", checkAuth, deleteProject);

export { ProjectsRouter };
