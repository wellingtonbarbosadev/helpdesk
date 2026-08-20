import { Router } from "express";
import { SessionsController } from "./SessionsController.js";

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post("/", sessionsController.createNewSession);

export { sessionsRouter };
