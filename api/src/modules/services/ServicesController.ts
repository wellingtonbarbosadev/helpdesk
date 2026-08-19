import { type Request, type Response } from "express";
import { ServicesRepository } from "./ServicesRepository.js";
import { ServicesService } from "./ServicesService.js";

const repository = new ServicesRepository();
const service = new ServicesService();

class ServicesController {
  async listServices(request: Request, response: Response) {
    const services = await repository.listAllServices();
    return response.json(services);
  }

  async createService(request: Request, response: Response) {
    const _service = await service.createService(request.body);

    return response.json(_service).status(201);
  }
}

export { ServicesController };
