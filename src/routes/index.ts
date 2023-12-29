import express from "express";
import { AuthRouter } from "./auth";
import { SkillRouter } from "./skills";
import { ImagesRouter } from "./images";
import { AboutRouter } from "./about";
import { ProjectsRouter } from "./projects";
import { BlogRouter } from "./blog";
import { ExperienceRouter } from "./experince";
import { CategoriesRouter } from "./category";

const mainRouter = express.Router();

mainRouter.use("/auth", AuthRouter);
mainRouter.use("/skills", SkillRouter);
mainRouter.use("/images", ImagesRouter);
mainRouter.use("/about", AboutRouter);
mainRouter.use("/projects", ProjectsRouter);
mainRouter.use("/blog", BlogRouter);
mainRouter.use("/experience", ExperienceRouter);
mainRouter.use("/categories", CategoriesRouter);

export { mainRouter };
