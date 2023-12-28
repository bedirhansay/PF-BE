import {
  CreateBlog,
  DeleteBlog,
  GetBlogById,
  BlogValidation,
  UpdateBlog,
  GetAllBlogs,
} from "../models";
import { NextFunction, Request, Response } from "express";

export const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allBlogs = await GetAllBlogs();

    if (allBlogs) {
      return res.status(200).json(allBlogs);
    } else {
      return res.status(404).send("Henüz hiç blog eklenmedi");
    }
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const getBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const BlogId = req.params.id;

    const Blog = await GetBlogById(BlogId);

    if (!Blog) {
      return res.status(404).json("Blog not found");
    } else {
      return res.status(200).json(Blog);
    }
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const createBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postData = req.body;
    const validationResult = BlogValidation(postData);

    if (validationResult.error) {
      return res.status(400).json(validationResult.error.details[0].message);
    }

    const result = await CreateBlog(postData);
    console.log(result);

    return res.status(201).json(`succes: ${result}`);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const updateBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const patchData = req.body;

    const data = await UpdateBlog(id, patchData);
    console.log(data);

    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const deleteBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const existingBlog = await DeleteBlog(id);

    if (!existingBlog) {
      return res.status(404).json("Id bulunamadı.");
    }
    const data = await DeleteBlog(id);
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
