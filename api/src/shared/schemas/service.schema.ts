import z from "zod";

const serviceSchema = z.object({
  name: z.string(),
  description: z.string().min(10),
  price: z.number(),
  active: z.boolean().default(true),
});

export { serviceSchema };
