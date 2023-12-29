import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  updateBlog,
  getBlogById,
} from "../controller/blog";
import { checkAuth } from "../middleware";

const BlogRouter = express.Router();

BlogRouter.get("/", getBlogs);
BlogRouter.get("/:id", getBlogById);
BlogRouter.post("/", checkAuth, createBlog);
BlogRouter.patch("/:id", checkAuth, updateBlog);
BlogRouter.delete("/:id", checkAuth, deleteBlog);

export { BlogRouter };
