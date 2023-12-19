import express from "express";

import { SkillRouter } from "./skills";

const mainRouter = express.Router();

mainRouter.use("/skills", SkillRouter);

export { mainRouter };
