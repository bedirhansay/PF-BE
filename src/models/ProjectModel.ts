import Joi from "joi";
import mongoose from "mongoose";
import { ProjectDTO } from "../types";

const ProjectSchema = new mongoose.Schema(
  {
    company: { type: String },
    projectName: { type: String },
    time: { type: Number },
    area: { type: String },
    image: { type: String },
    tags: { type: [String] },
    description: { type: String },
    goals: { type: [String] },
    scope: { type: String },
    requirements: { type: [String] },
    tasks: { type: [String] },
  },
  { timestamps: true, versionKey: false }
);

export const ProjectModel =
  mongoose.models.Projects || mongoose.model("Projects", ProjectSchema);

export const GetAllProjects = () => ProjectModel.find();

export const GetProjectById = (id: string) =>
  ProjectModel.findById({ _id: id });

export const CreateProject = (values: Record<string, any>) =>
  new ProjectModel(values).save().then((project: any) => project.toObject());

export const DeleteProject = (id: string) =>
  ProjectModel.findOneAndDelete({ _id: id });

export const UpdateProject = (id: string, values: Record<string, any>) =>
  ProjectModel.findByIdAndUpdate(id, values);

export const ProjectValidation = (project: ProjectDTO) => {
  const projectValidationSchema = Joi.object({
    company: Joi.string().required(),
    projectName: Joi.string().required(),
    image: Joi.string(),
    time: Joi.number().required(),
    area: Joi.string().required(),
    tags: Joi.array().items(Joi.string()),
    description: Joi.string(),
    goals: Joi.array().items(Joi.string()),
    scope: Joi.string(),
    requirements: Joi.array().items(Joi.string()),
    tasks: Joi.array().items(Joi.string()),
  });

  return projectValidationSchema.validate(project);
};
