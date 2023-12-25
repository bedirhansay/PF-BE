import { uploadImageToFirabase } from "../helpers";
import { Request, Response, NextFunction } from "express";

type FilesData = {
  field: string;
  image: Buffer | string;
  name: string;
};
export const uploadImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const fileData = req.file;

    const { field } = req.body;

    if (!fileData) {
      return res.status(400).json("Dosya bulunamadı.");
    }

    const filesData: FilesData = {
      field: field,
      image: fileData.buffer,
      name: fileData.originalname,
    };

    const url = await uploadImageToFirabase(filesData);

    if (url) {
      return res.status(201).json({
        url: url.url,
      });
    } else {
      return res.status(400).json("Dosya yüklenemedi");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
