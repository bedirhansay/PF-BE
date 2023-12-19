import { currentUser, login, register } from "@controller";
import { checkAuth } from "@middleware";

import express from "express";

const AuthRouter = express.Router();

AuthRouter.post("/register", register);
AuthRouter.post("/login", login);
AuthRouter.get("/user", checkAuth, currentUser);

export { AuthRouter };
