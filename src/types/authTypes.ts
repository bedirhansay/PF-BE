import { ObjectId } from "mongodb";

export interface IGenerateToken {
  id: ObjectId;
}

export interface UserDTO {
  username: string;
  email: string;
  password: string;
}

export interface LoginDTO {
  username: string;
  email: string;
  password: string;
}

export interface IUser {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
}
