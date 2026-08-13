import { UserRepository } from "../repositories/UserRepository.js";
import type { Request, Response } from "express";

const repository = new UserRepository();

class UserController {
  listUsers(request: Request, response: Response) {
    const users = repository.listAll();
    return response.json(users);
  }
}

export { UserController };
