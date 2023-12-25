import express from "express";
import { checkAuth } from "../middleware";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  updateBlog,
  getBlogById,
} from "../controller/blog";

const BlogRouter = express.Router();

BlogRouter.get("/", getBlogs);
BlogRouter.get("/:id", getBlogById);
BlogRouter.post("/", createBlog);
BlogRouter.patch("/", updateBlog);
BlogRouter.delete("/", deleteBlog);

export { BlogRouter };
