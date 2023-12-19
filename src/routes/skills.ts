import {
  getSkills,
  updateSkill,
  deleteSkill,
  createSkill,
  getSingleSkill,
} from "@controller";

import express from "express";

const SkillRouter = express.Router();

SkillRouter.get("/", getSkills);
SkillRouter.get("/:id", getSingleSkill);
SkillRouter.post("/", createSkill);
SkillRouter.patch("/", updateSkill);
SkillRouter.delete("/", deleteSkill);

export { SkillRouter };
