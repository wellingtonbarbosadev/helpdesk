import { prisma } from "../prisma/prisma.js";

class UserRepository {
  async listAll() {
    return await prisma.user.findMany();
  }

  async searchByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async createUser(data: User) {
    const user = await prisma.user.create({ data });
    return user;
  }
}

export { UserRepository };
