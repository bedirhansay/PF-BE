import express from "express";
import {
  createProject,
  deleteProject,
  getProjects,
  getSingleProject,
  updateProject,
} from "../controller";
import { checkAuth } from "../middleware";

const ProjectsRouter = express.Router();

ProjectsRouter.get("/", getProjects);
ProjectsRouter.get("/:id", getSingleProject);
ProjectsRouter.post("/", createProject);
ProjectsRouter.patch("/", updateProject);
ProjectsRouter.delete("/:id", deleteProject);

export { ProjectsRouter };
