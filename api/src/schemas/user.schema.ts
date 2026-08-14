import z from "zod";

export const userCreateSchema = z.object(
  {
    name: z.string().min(3).max(50),
    email: z.email(),
    avatarUrl: z.string().min(6).optional(),
  },
  {
    error: "body is required",
  },
);
