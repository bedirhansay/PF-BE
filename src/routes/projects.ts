import express from "express";
import {
  createProject,
  deleteProject,
  getProjects,
  getProjectById,
  updateProject,
} from "../controller";

const ProjectsRouter = express.Router();

ProjectsRouter.get("/", getProjects);
ProjectsRouter.get("/:id", getProjectById);
ProjectsRouter.post("/", createProject);
ProjectsRouter.patch("/:id", updateProject);
ProjectsRouter.delete("/:id", deleteProject);

export { ProjectsRouter };
