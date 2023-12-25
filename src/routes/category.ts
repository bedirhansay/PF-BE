import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
} from "../controller";
import { checkAuth } from "../middleware";

const CategoriesRouter = express.Router();

CategoriesRouter.get("/", getCategories);
CategoriesRouter.get("/:id", getCategoryById);
CategoriesRouter.post("/", createCategory);
CategoriesRouter.patch("/", updateCategory);
CategoriesRouter.delete("/", deleteCategory);

export { CategoriesRouter };
