import { Router, type Request, type Response } from "express";

const usersRouter = Router();

usersRouter.get("/", (request: Request, response: Response) => {
  return response.send("Teste");
});

export { usersRouter };
