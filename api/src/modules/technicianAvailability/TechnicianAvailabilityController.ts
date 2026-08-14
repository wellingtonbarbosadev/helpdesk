import type { Request, Response } from "express";
import { TechnicianAvailabilityRepository } from "./TechnicianAvailabilityRepository.js";

const repository = new TechnicianAvailabilityRepository();

class TechnicianAvailabilityController {
  async listAll(request: Request, response: Response) {
    const availabilities = await repository.listAll();

    return response.json(availabilities);
  }
}

export { TechnicianAvailabilityController };
