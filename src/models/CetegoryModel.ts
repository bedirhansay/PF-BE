import { required } from "joi";
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const CategoryModel =
  mongoose.models.Categories || mongoose.model("Categories", CategorySchema);

export const GetAllCategories = () => CategoryModel.find();

export const GetCategoryById = (id: string) =>
  CategoryModel.findById({ _id: id });

export const CreateCategory = (values: Record<string, any>) =>
  new CategoryModel(values).save().then((user: any) => user.toObject());

export const DeleteCategory = (id: string) =>
  CategoryModel.findOneAndDelete({ _id: id });

export const UpdateCategory = (id: string, values: Record<string, any>) =>
  CategoryModel.findByIdAndUpdate(id, values);

import Joi from "joi";

export const CategoryValidation = (category: any) => {
  const categoryValidationSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
  });

  return categoryValidationSchema.validate(category);
};
