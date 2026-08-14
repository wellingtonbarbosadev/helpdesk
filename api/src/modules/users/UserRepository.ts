import { prisma } from "../../shared/prisma/prisma.js";


class UserRepository {
  async listAll() {
    const users = await prisma.user.findMany();
    return users;
  }

  async searchByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async searchById(id: string) {
    const user = prisma.user.findUnique({
      where: {
        id,
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
