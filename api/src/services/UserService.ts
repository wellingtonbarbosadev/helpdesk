import z from "zod";
import { UserRepository } from "../repositories/UserRepository.js";
import { userCreateSchema } from "../schemas/user.schema.js";
import { AppError } from "../utils/AppError.js";

const repository = new UserRepository();

class UserService {
  async createUser(userData: User) {
    const user = userCreateSchema.parse(userData);

    const searchPossibleExistingUser = await repository.searchByEmail(
      user.email,
    );

    if (searchPossibleExistingUser) {
      throw new AppError("User already exist with this email");
    }

    return await repository.createUser(user);
  }
}

export { UserService };
