import { Router } from "express";
import { UserController } from "../controllers/UserController.js";

const usersController = new UserController();
const usersRouter = Router();

usersRouter.get("/", usersController.listUsers);
usersRouter.get("/:id", usersController.getUserById);
usersRouter.post("/", usersController.createUser);

export { usersRouter };
