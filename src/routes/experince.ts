import express from "express";
import {
  createExperience,
  deleteExperience,
  getExperienceById,
  getExperiences,
  updateExperience,
} from "../controller";
import { checkAuth } from "../middleware";

const ExperienceRouter = express.Router();

ExperienceRouter.get("/", getExperiences);
ExperienceRouter.get("/:id", getExperienceById);
ExperienceRouter.post("/", createExperience);
ExperienceRouter.patch("/", updateExperience);
ExperienceRouter.delete("/", deleteExperience);

export { ExperienceRouter };
