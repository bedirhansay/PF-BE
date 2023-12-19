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
    const { id, field } = req.body;

    if (!fileData) {
      return res.status(400).json({
        error: "Dosya bulunamadı.",
      });
    }

    const filesData: FilesData = {
      field: field,
      image: fileData.buffer,
      name: fileData.originalname,
    };

    const url = await uploadImageToFirabase(filesData);

    if (url) {
      return res.status(200).json({
        status: 201,
        url: url.url,
        message: "Dosya başarıyla yüklendi",
      });
    } else {
      return res.status(400).json({
        status: 201,
        message: "Dosya yüklenemedi",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "Hata: " + error });
  }
};
