import express from "express";
import multer from "multer";
import { uploadImage } from "../controller";
import { checkAuth } from "../middleware";

const upload = multer();
const ImagesRouter = express.Router();

ImagesRouter.post("/", upload.single("image"), checkAuth,uploadImage);

export { ImagesRouter };
