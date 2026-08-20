import { Router } from "express";
import { usersRouter } from "../modules/users/users.routes.js";
import { technicianRouter } from "../modules/technicianAvailability/technicianAvailability.routes.js";
import { serviceRoutes } from "../modules/services/services.routes.js";
import { sessionsRouter } from "../modules/sessions/sessions.routes.js";

export const routes = Router();

routes.use("/users", usersRouter);
routes.use("/technician", technicianRouter);
routes.use("/services", serviceRoutes)
routes.use("/sessions", sessionsRouter);