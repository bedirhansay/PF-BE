// import express from "express";
// import { createSkill,getSkills, updateSkill, deleteSkill,getSingleSkill, } from "../controller";

// const SkillRouter = express.Router();

// SkillRouter.get("/", getSkills);
// SkillRouter.get("/:id", getSingleSkill);
// SkillRouter.post("/", createSkill);
// SkillRouter.patch("/", updateSkill);
// SkillRouter.delete("/", deleteSkill);

// export { SkillRouter };

import express from "express";

const SkillRouter = express.Router();

SkillRouter.get("/", (req, res) => {
  res.send("get skills");
});
SkillRouter.get("/:id", (req, res) => {
  res.send("getsingleskills");
});

export { SkillRouter };
