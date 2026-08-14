import { UserRepository } from "../repositories/UserRepository.js";
import type { Request, Response } from "express";
import { UserService } from "../services/UserService.js";
import { AppError } from "../utils/AppError.js";

const repository = new UserRepository();
const service = new UserService();

class UserController {
  listUsers(request: Request, response: Response) {
    const users = repository.listAll();
    return response.json(users);
  }

  async createUser(request: Request, response: Response) {
    const user = await service.createUser(request.body);

    if (!user) {
      throw new AppError("Error when create user", 500);
    }

    return response.status(201).json(user);
  }
}

export { UserController };
