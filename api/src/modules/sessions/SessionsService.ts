import type { Request, Response } from "express";
import { UserRepository } from "../users/UserRepository.js";
import { createUserSessionSchema } from "../../shared/schemas/user.schema.js";
import { AppError } from "../../shared/utils/AppError.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../../shared/config/env.js";

const userRepository = new UserRepository();

class SessionsService {
  async createNewSession(request: Request, response: Response) {
    const { email, password } = createUserSessionSchema.parse(request.body);
    const user = await userRepository.searchByEmail(email);

    if (!user) {
      throw new AppError("wrong user or password", 401);
    }

    const userAuthenticated = await compare(password, user.password);

    if (!userAuthenticated) {
      throw new AppError("wrong user or password", 401);
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role
      },
      env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    return token;
  }
}

export { SessionsService };