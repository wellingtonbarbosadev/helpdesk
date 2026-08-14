import { Router, type Request, type Response } from "express";
import { UserService } from "../services/UserService.js";
import { UserController } from "../controllers/UserController.js";

const usersController = new UserController();
const usersRouter = Router();

usersRouter.get("/", usersController.listUsers);
usersRouter.post("/", usersController.createUser);

export { usersRouter };
