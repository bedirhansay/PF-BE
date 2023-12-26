import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
} from "../controller";

const CategoriesRouter = express.Router();

CategoriesRouter.get("/", getCategories);
CategoriesRouter.get("/:id", getCategoryById);
CategoriesRouter.post("/", createCategory);
CategoriesRouter.patch("/:id", updateCategory);
CategoriesRouter.delete("/:id", deleteCategory);

export { CategoriesRouter };
