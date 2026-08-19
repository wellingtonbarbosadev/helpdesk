import { serviceSchema } from "../../shared/schemas/service.schema.js";
import { ServicesRepository } from "./ServicesRepository.js";

const repository = new ServicesRepository();

class ServicesService {
  async createService(data: unknown) {
    const serviceData = serviceSchema.parse(data ?? {});

    const service = await repository.createService(serviceData);

    return service;
  }
}

export { ServicesService };
