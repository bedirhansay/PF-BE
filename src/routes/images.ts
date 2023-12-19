
import express from "express";
import multer from "multer";
import { uploadImage } from "../controller";

const upload = multer({ dest: "uploads/" });
const ImagesRouter = express.Router();

ImagesRouter.post("/", upload.single("image"), uploadImage);

export { ImagesRouter };
