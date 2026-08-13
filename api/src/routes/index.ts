import { Router } from "express";
import { app } from "../server.js";
import { usersRouter } from "./usersRoutes.js";

export const routes = Router();

routes.use("/users", usersRouter);
