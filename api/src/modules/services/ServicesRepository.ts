import type z from "zod";
import { prisma } from "../../shared/prisma/prisma.js";
import type { serviceSchema } from "../../shared/schemas/service.schema.js";

class ServicesRepository {
  async listAllServices() {
    return await prisma.service.findMany()
  }

  async createService(service: z.infer<typeof serviceSchema>) {
    return await prisma.service.create({
      data: service
    })
  }
}

export { ServicesRepository };
