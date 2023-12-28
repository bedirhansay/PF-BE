import mongoose, { Document } from "mongoose";
import slugify from "slugify";
import Joi from "joi";

interface BlogDTO {
  title: string;
  slug?: string;
  description?: string;
  image?: string;
  viewCount?: number;
  category?: mongoose.Schema.Types.ObjectId;
}

interface BlogDocument extends Document, BlogDTO {
  generateSlug: () => string;
}

const BlogSchema = new mongoose.Schema<BlogDocument>(
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

BlogSchema.pre("save", function (next) {
  if (!this.isModified("title")) {
    return next();
  }

  const title = this.get("title") as string;
  if (title) {
    this.set("slug", slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g }));
  }
  next();
});

BlogSchema.methods.generateSlug = function () {
  return this.get("slug") as string;
};

const BlogModel =
  mongoose.models.Blogs || mongoose.model<BlogDocument>("Blogs", BlogSchema);

export const GetAllBlogs = () =>
  BlogModel.find().populate({ path: "category" });

export const GetBlogById = (id: string) => BlogModel.findById({ _id: id });

export const CreateBlog = (values: Record<string, any>) =>
  new BlogModel(values).save().then((pr: any) => pr.toObject());

export const UpdateBlog = (id: string, values: Record<string, any>) =>
  BlogModel.findByIdAndUpdate(id, values);

export const DeleteBlog = (id: string) =>
  BlogModel.findOneAndDelete({ _id: id });

export const BlogValidation = (blog: BlogDTO) => {
  const blogValidationSchema = Joi.object({
    title: Joi.string().required(),
    slug: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    category: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  });
  return blogValidationSchema.validate(blog);
};
