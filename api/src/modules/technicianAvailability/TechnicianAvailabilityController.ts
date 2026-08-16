import type { Request, Response } from "express";
import { TechnicianAvailabilityRepository } from "./TechnicianAvailabilityRepository.js";
import { TechnicianAvailabilityService } from "./TechnicianAvailabilityService.js";

const repository = new TechnicianAvailabilityRepository();
const service = new TechnicianAvailabilityService();

class TechnicianAvailabilityController {
  async listAll(request: Request, response: Response) {
    const availabilities = await repository.listAll();

    return response.json(availabilities);
  }

  async create(request: Request, response: Response) {
    const technicianAvailability = await service.createNewTechnician(request)

    return response.status(201).json(technicianAvailability)
  }
}

export { TechnicianAvailabilityController };
