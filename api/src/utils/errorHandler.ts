import type { NextFunction, Request, Response } from "express";
import z, { ZodError } from "zod";
import { AppError } from "./AppError.js";

export function errorHandler(
  err: any,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (err instanceof ZodError) {
    return response.status(400).json({
      message: "Validation error",
      errors: z.prettifyError(err),
    });
  }

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({ message: err.message });
}
