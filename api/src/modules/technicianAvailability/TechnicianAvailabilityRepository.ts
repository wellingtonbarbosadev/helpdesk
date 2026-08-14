import { prisma } from "../../shared/prisma/prisma.js";

class TechnicianAvailabilityRepository {
  async listAll() {
    const availabilities = await prisma.technicianAvailability.findMany();
    return availabilities;
  }
}

export {TechnicianAvailabilityRepository}