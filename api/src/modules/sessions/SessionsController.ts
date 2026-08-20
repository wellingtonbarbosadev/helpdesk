import type { Request, Response } from "express";
import { SessionsService } from "./SessionsService.js";
import { AppError } from "../../shared/utils/AppError.js";

const service = new SessionsService();

class SessionsController {
  async createNewSession(request: Request, response: Response) {
    const token = await service.createNewSession(request, response);

    if (!token) {
      throw new AppError("Error when create session", 500);
    }

    return response.status(201).json({ token });
  }
}

export { SessionsController };
