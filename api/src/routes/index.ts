import { Router } from "express";
import { usersRouter } from "../modules/users/users.routes.js";
import { technicianRouter } from "../modules/technicianAvailability/technicianAvailability.routes.js";

export const routes = Router();

routes.use("/users", usersRouter);
routes.use("/technician", technicianRouter);
