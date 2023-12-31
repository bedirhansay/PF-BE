import {
  generateToken,
  hashPassword,
  logger,
  verifyPassword,
  verifyToken,
} from "../helpers";
import { createUser, getUserByEmail, userValidation } from "../models";
import { IUser } from "../types";
import { NextFunction, Request, Response } from "express";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error } = userValidation(req.body);
    if (error) {

      return res.status(400).json(error.details[0].message);
    }

    const { email, password } = req.body;

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json("Email already exists");
    }

    const hashedPassword = await hashPassword(password);

    const user = await createUser({
      email,
      password: hashedPassword,
    });

    const token = generateToken({
      id: user._id,
    });

    return res.status(201).json({ user, token });
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json("Email and password are required");
    }

    const user: IUser | null = await getUserByEmail(email);

    if (!user) {
      return res
        .status(404)
        .json(`${email} Not Found registered or Password incorrect`);
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json("Password incorrect");
    } else {
      const token = generateToken({
        id: user._id,
      });
      return res.status(200).json({ user, token });
    }
  } catch (err: any) {
    logger.error("User registiration error", err.toString());
    return res.status(400).json(err.message);
  }
};

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { JWT_SECRET } = process.env;
  if (JWT_SECRET) {
    return null;
  }

  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.status(401).json("Token Bulunamadı");
    }

    const token = authorizationHeader.split("Bearer:")[1];
    //@ts-ignore
    const data = verifyToken(token, JWT_SECRET, res, next);
  } catch (error: any) {
    logger.error("User registiration error", error.toString());
    return res.status(400).json(error.message);
  }
};
