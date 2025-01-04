import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const stringBoolean = z.coerce
  .string()
  .transform((val) => {
    return val === "true";
  })
  .default("false");

// Keep NODE_ENV in the shared section to ensure proper tree-shaking behavior
export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    DB_AUTH_TOKEN: z.string(),
    DB_SEEDING: stringBoolean,
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
  },
  shared: {
    NODE_ENV: z.enum(["test", "development", "production"]),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    DB_AUTH_TOKEN: process.env.DB_AUTH_TOKEN,
    DB_SEEDING: process.env.DB_SEEDING || "false",
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
});
