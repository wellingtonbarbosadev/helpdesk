import { Router } from "express";
import { usersRouter } from "../modules/users/users.routes.js";

export const routes = Router();

routes.use("/users", usersRouter);
