import express from "express";
import { getAbout, updateAbout, createAbout } from "../controller";
import { checkAuth } from "../middleware";

const AboutRouter = express.Router();

AboutRouter.post("/", checkAuth, createAbout);
AboutRouter.patch("/", checkAuth, updateAbout);
AboutRouter.get("/", checkAuth, getAbout);

export { AboutRouter };
