import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  updateBlog,
  getBlogById,
  updateViewCount,
} from "../controller/blog";
import { checkAuth } from "../middleware";

const BlogRouter = express.Router();

BlogRouter.get("/", getBlogs);
BlogRouter.get("/:id", getBlogById);
BlogRouter.post("/", checkAuth, createBlog);
BlogRouter.patch("/:id", checkAuth, updateBlog);
BlogRouter.put("/:id", updateViewCount);
BlogRouter.delete("/:id", checkAuth, deleteBlog);

export { BlogRouter };
