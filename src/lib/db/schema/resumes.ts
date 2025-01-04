import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";
import { experiences, users } from ".";
import { relations } from "drizzle-orm";

const resumes = sqliteTable("resumes", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: text("title").default("Untitled Resume"),
  description: text("description").default(""),
  imageUrl: text("imageUrl").default(""),
  hexColor: text("hexColor").notNull().default("#000000"),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  jobTitle: text("jobTitle").notNull(),
  city: text("city").notNull(),
  country: text("country").notNull(),
  phoneNumber: text("phoneNumber").notNull(),
  email: text("email").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: int("createdAt", { mode: "timestamp_ms" }).notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp_ms" }).notNull(),
});

export const resumesRelations = relations(resumes, ({ many }) => ({
  experiences: many(experiences),
}));

export default resumes;
