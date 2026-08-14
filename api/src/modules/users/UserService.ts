import {
  userCreateSchema,
  userIdSchemaParams,
} from "../../shared/schemas/user.schema.js";
import { AppError } from "../../shared/utils/AppError.js";
import type { Request } from "express";
import { UserRepository } from "./UserRepository.js";

const repository = new UserRepository();

class UserService {
  async getUserById(request: Request) {
    const { id } = userIdSchemaParams.parse(request.params);

    const user = await repository.searchById(id);

    if (!user) {
      throw new AppError("user with this id not exists");
    }

    return user;
  }

  async createUser(userData: User) {
    const user = userCreateSchema.parse(userData ?? {});

    const searchPossibleExistingUser = await repository.searchByEmail(
      user.email,
    );

    if (searchPossibleExistingUser) {
      throw new AppError("user with this email already exists");
    }

    return repository.createUser(user);
  }
}

export { UserService };
