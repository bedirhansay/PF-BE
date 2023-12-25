import express from "express";
import { AuthRouter } from "./auth";
import { SkillRouter } from "./skills";
import { ImagesRouter } from "./images";
import { checkAuth } from "../middleware";
import { AboutRouter } from "./about";
import { ProjectsRouter } from "./projects";
import { BlogRouter } from "./blog";
import { ExperienceRouter } from "./experince";
import { CategoriesRouter } from "./category";

const mainRouter = express.Router();

mainRouter.use("/auth", AuthRouter);
mainRouter.use("/skills", checkAuth, SkillRouter);
mainRouter.use("/images", checkAuth, ImagesRouter);
mainRouter.use("/about", checkAuth, AboutRouter);
mainRouter.use("/projects", ProjectsRouter);
mainRouter.use("/blog", BlogRouter);
mainRouter.use("/experience", ExperienceRouter);
mainRouter.use("/categories", CategoriesRouter);

export { mainRouter };
