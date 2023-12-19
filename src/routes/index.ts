import express from "express";
import { AuthRouter } from "./auth";
import { SkillRouter } from "./skills";
import { checkAuth } from "@middleware";
import { ImagesRouter } from "./images";

const mainRouter = express.Router();

mainRouter.use("/auth", AuthRouter);
mainRouter.use("/skills", checkAuth, SkillRouter);
mainRouter.use("/images", checkAuth, ImagesRouter);

export { mainRouter };
