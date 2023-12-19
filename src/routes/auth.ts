import express from "express";

import { getSkills } from "../controller/deneme";

const AuthRouter = express.Router();

AuthRouter.post("/register", getSkills);
AuthRouter.post("/login", getSkills);
AuthRouter.get("/user", getSkills);

export { AuthRouter };
