import Joi from "joi";
import mongoose from "mongoose";
import slugify from "slugify";
import { BlogDTO } from "../types";

export const BlogSchema = new mongoose.Schema(
  {
    title: { type: String },
    slug: { type: String },
    description: { type: String },
    image: { type: String },
    viewCount: { type: Number },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
  },
  { versionKey: false, timestamps: true }
);
export const BlogModel =
  mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema);

export const GetAllBlogs = () =>
  BlogModel.find().populate({
    path: "category",
  });

export const GetBlogById = (id: string) => BlogModel.findById({ _id: id });

export const CreateBlog = (values: Record<string, any>) =>
  new BlogModel(values).save().then((pr: any) => pr.toObject());

export const UpdateBlog = (id: string, values: Record<string, any>) =>
  BlogModel.findByIdAndUpdate(id, values);

export const DeleteBlog = (id: string) =>
  BlogModel.findOneAndDelete({ _id: id });

BlogSchema.pre("save", function (next) {
  const title = this.title;
  if (title) {
    this.slug = slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g });
  }
  next();
});

export const BlogValidation = (blog: BlogDTO) => {
  const blogValidationSchema = Joi.object({
    title: Joi.string().required(),
    slug: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    viewCount: Joi.number(),
    category: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  });
  return blogValidationSchema.validate(blog);
};
