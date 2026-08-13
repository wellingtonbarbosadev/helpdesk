import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (response) => response.body("teste"));

export { usersRouter };
