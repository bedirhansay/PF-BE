import express from "express";
import {
  createExperience,
  deleteExperience,
  getExperienceById,
  getExperiences,
  updateExperience,
} from "../controller";

const ExperienceRouter = express.Router();

ExperienceRouter.get("/", getExperiences);
ExperienceRouter.get("/:id", getExperienceById);
ExperienceRouter.post("/", createExperience);
ExperienceRouter.patch("/:id", updateExperience);
ExperienceRouter.delete("/:id", deleteExperience);

export { ExperienceRouter };
