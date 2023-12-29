import express from "express";
import {
  createSkill,
  getSkills,
  updateSkill,
  deleteSkill,
  getSingleSkill,
} from "../controller";
import { checkAuth } from "../middleware";

const SkillRouter = express.Router();

SkillRouter.get("/", getSkills);
SkillRouter.get("/:id", getSingleSkill);
SkillRouter.post("/", checkAuth, createSkill);
SkillRouter.patch("/:id", checkAuth, updateSkill);
SkillRouter.delete("/:id", checkAuth, deleteSkill);

export { SkillRouter };
