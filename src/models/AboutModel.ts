import mongoose from "mongoose";

export const AboutSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const AboutModel =
  mongoose.models.About || mongoose.model("About", AboutSchema);

export const GetAbout = () => AboutModel.find();

export const CreateAbout = (values: Record<string, any>) =>
  new AboutModel(values).save().then((about: any) => about.toObject());

export const UpdateAbout = (id: string, values: Record<string, any>) =>
  AboutModel.findByIdAndUpdate(id, values);
