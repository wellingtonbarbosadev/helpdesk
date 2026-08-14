import type { Request, Response } from "express";
import { UserService } from "./UserService.js";
import { AppError } from "../../shared/utils/AppError.js";
import { UserRepository } from "./UserRepository.js";

const repository = new UserRepository();
const service = new UserService();

class UserController {
  async listUsers(request: Request, response: Response) {
    const users = await repository.listAll();
    return response.json(users);
  }

  async getUserById(request: Request, response: Response) {
    const user = await service.getUserById(request);

    return response.json(user);
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
