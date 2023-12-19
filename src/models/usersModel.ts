import mongoose from "mongoose";
import Joi from "joi";
import { UserDTO } from "../types";

//! Schema

const UserSchema = new mongoose.Schema(
  {
    email: { type: String },
    password: { type: String },
  },
  { versionKey: false, timestamps: true }
);

//! Model

export const UserModel =
  mongoose.models.Users || mongoose.model("Users", UserSchema);

//! Functions LOGIN

export const getUser = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserById = (id: string) => UserModel.findById({ _id: id });

//! Resgister User
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user: any) => user.toObject());

//! User ACtions
export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });

export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);

//! Validation
export const userValidation = (user: UserDTO) => {
  const userValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return userValidationSchema.validate(user);
};
