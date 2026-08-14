import z from "zod";

export const userCreateSchema = z.object(
  {
    name: z.string().min(3).max(50).trim(),
    email: z.email().trim().toLowerCase(),
    avatarUrl: z.string().min(6).optional(),
  },
  
);

export const userIdSchemaParams = z.object({
  id: z.uuid({error: "invalid UUID"})
})