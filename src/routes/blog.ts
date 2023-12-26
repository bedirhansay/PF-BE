import express from "express";
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
BlogRouter.patch("/:id", updateBlog);
BlogRouter.delete("/:id", deleteBlog);

export { BlogRouter };
