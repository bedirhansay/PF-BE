import {
  CreateCategory,
  DeleteCategory,
  GetCategoryById,
  CategoryValidation,
  UpdateCategory,
  GetAllCategories,
} from "../models";
import { NextFunction, Request, Response } from "express";

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allCategories = await GetAllCategories();
    if (allCategories) {
      return res.status(200).json(allCategories);
    } else {
      return res.status(404).send("Henüz hiç deneyim eklenmedi");
    }
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const getCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const CategoryId = req.params.id;
    const Category = await GetCategoryById(CategoryId);

    if (!Category) {
      return res.status(404).json("Category not found");
    } else {
      return res.status(200).json(Category);
    }
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postData = req.body;
    const validationResult = CategoryValidation(postData);

    if (validationResult.error) {
      return res.status(400).json(validationResult.error.details[0].message);
    }

    const result = await CreateCategory(postData);

    return res.status(201).json("Category oluşturuldu.");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const patchData = req.body;

    const data = await UpdateCategory(id, patchData);

    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const existingCategory = await DeleteCategory(id);

    if (!existingCategory) {
      return res.status(404).json("Id bulunamadı.");
    }
    const data = await DeleteCategory(id);
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
