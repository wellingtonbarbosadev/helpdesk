import "dotenv/config"
import z, { ZodError } from "zod"

const envSchema = z.object({
  PORT: z.coerce.number(),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
});

export let env: z.infer<typeof envSchema>;

try {
  env = envSchema.parse(process.env)
} catch (error) {
  if (error instanceof ZodError) {
    const errors = z.flattenError(error)

    console.error("Variáveis de ambiente inválidas");
    console.error(errors);
    throw new Error("Variáveis de ambiente inválidas");
  }
}
