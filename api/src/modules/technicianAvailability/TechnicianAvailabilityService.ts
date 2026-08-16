import type { Request } from "express";
import { TechnicianAvailabilityRepository } from "./TechnicianAvailabilityRepository.js";
import { technicianSchema } from "../../shared/schemas/technicianAvailability.schema.js";
import { UserRepository } from "../users/UserRepository.js";
import { AppError } from "../../shared/utils/AppError.js";

const repository = new TechnicianAvailabilityRepository();

class TechnicianAvailabilityService {
  async createNewTechnician(request: Request) {
    const { technicianId, hours } = technicianSchema.parse(request.body ?? {});

    const user = await new UserRepository().searchById(technicianId)

    if (user?.role !== "TECHNICIAN") {
      throw new AppError("this user not's a technician")
    }

    const technicianAvailability = await repository.createNewTechnician({
      technicianId,
      hours,
    });
    return technicianAvailability;
  }
}

export { TechnicianAvailabilityService };
