import {
  CreateBlog,
  DeleteBlog,
  GetBlogById,
  BlogValidation,
  UpdateBlog,
  GetAllBlogs,
} from "../models";
import { NextFunction, Request, Response } from "express";
import { BlogPagination } from "../utils/blogPagination";

const ITEMS_PER_PAGE = 9;

export const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const allBlogs = await GetAllBlogs();

    if (allBlogs) {
      const paginatedBlogs = await BlogPagination({
        allBlogs,
        page,
        itemsPerPage: ITEMS_PER_PAGE,
      });

      return res.status(200).json(paginatedBlogs);
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

    if (Blog.viewCount) {
      Blog.viewCount++;

      await UpdateBlog(BlogId, Blog.viewCount);
    } else {
      await UpdateBlog(BlogId, {
        viewCount: 1,
      });
    }

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
export const updateViewCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    if (req.body.viewCount) {
      const patchData = req.body;
      const data = await UpdateBlog(id, patchData);
      return res.status(200).json(data);
    }
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
