import { PrismaClient } from "@/generated/prisma/client";
import { env } from "@/lib/env";

import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  // connectionString: process.env["DATABASE_URL"],
  connectionString: env.DATABASE_URL,
});

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};
// 避免nextjs hotreload 时候 每次都创建新的prisma client，导致的连接池耗尽
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma };
