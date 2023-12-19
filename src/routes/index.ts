import express from "express";
import { AuthRouter } from "./auth";
import { SkillRouter } from "./skills";
import { ImagesRouter } from "./images";
import { checkAuth } from "../middleware";

const mainRouter = express.Router();

mainRouter.use("/auth", AuthRouter);
mainRouter.use("/skills", checkAuth, SkillRouter);
mainRouter.use("/images", checkAuth, ImagesRouter);

export { mainRouter };
