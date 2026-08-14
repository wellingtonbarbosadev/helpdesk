
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { env } from "../config/env.js";
import { PrismaClient } from "../../../generated/client.js";

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({ url: env.DATABASE_URL }),
});

export { prisma };
