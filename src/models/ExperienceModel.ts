import mongoose from "mongoose";
import Joi from "joi";
import { ExperienceDTO } from "../types";

export const ExperienceSchema = new mongoose.Schema(
  {
    title: String,
    location: String,
    position: String,
    description: String,
    image: String,
    date: String,
    skills: [String],
  },
  { versionKey: false, timestamps: true }
);

export const ExperienceModel =
  mongoose.models.Experiences ||
  mongoose.model("Experiences", ExperienceSchema);

export const GetAllExperiences = () => ExperienceModel.find();

export const GetExperienceById = (id: string) =>
  ExperienceModel.findById({ _id: id });

export const CreateExperience = (values: Record<string, any>) =>
  new ExperienceModel(values).save().then((user: any) => user.toObject());

export const DeleteExperience = (id: string) =>
  ExperienceModel.findOneAndDelete({ _id: id });

export const UpdateExperience = (id: string, values: Record<string, any>) =>
  ExperienceModel.findByIdAndUpdate(id, values);

export const ExperienceValidation = (experience: ExperienceDTO) => {
  const experienceValidationSchema = Joi.object({
    title: Joi.string().required(),
    location: Joi.string().required(),
    position: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string(),
    date: Joi.string().required(),
    skills: Joi.array().items(Joi.string()),
  });

  return experienceValidationSchema.validate(experience);
};
