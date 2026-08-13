import { PrismaClient } from "../../generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "../config/env.js";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: env.DATABASE_URL }),
});

export { prisma };
