import { prisma } from "../../shared/prisma/prisma.js";

class TechnicianAvailabilityRepository {
  async listAll() {
    const availabilities = await prisma.technicianAvailability.findMany();
    return availabilities;
  }

  async createNewTechnician({ technicianId, hours }: TechnicianAvailability) {
    const technicianAvailability = await prisma.technicianAvailability.upsert({
      where: {
        technicianId,
      },
      update: {
        hours,
      },
      create: {
        technicianId,
        hours,
      },
    });

    return technicianAvailability;
  }
}

export { TechnicianAvailabilityRepository };
