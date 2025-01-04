import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { env } from "@/env";

export default defineConfig({
  out: "./src/lib/db/migrations",
  schema: "./src/lib/db/schema/index.ts",
  dialect: "turso",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DB_AUTH_TOKEN,
  },
});
