import express from "express";
import { AuthRouter } from "./auth";
import { SkillRouter } from "./skills";
import { ImagesRouter } from "./images";

const mainRouter = express.Router();

mainRouter.use("/auth", AuthRouter);
mainRouter.use("/skills", SkillRouter);
mainRouter.use("/images", ImagesRouter);

export { mainRouter };
