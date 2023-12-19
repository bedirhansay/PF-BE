import express from "express";
import { getSkills } from "../controller/deneme";

const SkillRouter = express.Router();

SkillRouter.get("/", getSkills);
SkillRouter.get("/:id", getSkills);
SkillRouter.post("/", getSkills);
SkillRouter.patch("/", getSkills);
SkillRouter.delete("/", getSkills);

export { SkillRouter };
