import { Router } from "express";
import { usersRouter } from "./usersRoutes.js";

export const routes = Router();

routes.use("/users", usersRouter);
