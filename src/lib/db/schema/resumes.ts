import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";
import { experiences, users } from ".";
import { relations, sql } from "drizzle-orm";

const resumes = sqliteTable("resumes", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("title").default("Untitled Resume"),
  description: text("description").default(""),
  imageUrl: text("imageUrl").default(""),
  hexColor: text("hexColor").notNull().default("#000000"),
  jobTitle: text("jobTitle"),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const resumesRelations = relations(resumes, ({ many }) => ({
  experiences: many(experiences),
}));

export default resumes;
