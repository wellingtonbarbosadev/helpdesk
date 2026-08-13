import { prisma } from "../prisma/prisma.js";

class UserRepository {
  async listAll() {
    return await prisma.user.findMany();
  }
}

export { UserRepository };
