import { users } from "@/lib/db/schema";
import { z } from "zod";
import { createSelectSchema } from "drizzle-zod";

export const SelectUsersSchema = createSelectSchema(users);

export type SelectUsers = z.infer<typeof SelectUsersSchema>;
