import express from "express";
import {
  createSkill,
  getSkills,
  updateSkill,
  deleteSkill,
  getSingleSkill,
} from "../controller";

const SkillRouter = express.Router();

SkillRouter.get("/", getSkills);
SkillRouter.get("/:id", getSingleSkill);
SkillRouter.post("/", createSkill);
SkillRouter.patch("/:id", updateSkill);
SkillRouter.delete("/:id", deleteSkill);

export { SkillRouter };
