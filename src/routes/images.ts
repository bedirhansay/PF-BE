import express from "express";
import multer from "multer";

import { getSkills } from "../controller/deneme";

const upload = multer({ dest: "uploads/" });
const ImagesRouter = express.Router();

ImagesRouter.post("/", upload.single("image"), getSkills);

export { ImagesRouter };
