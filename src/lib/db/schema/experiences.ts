import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";
import { resumes } from ".";
import { relations } from "drizzle-orm";

const experiences = sqliteTable("experiences", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid()),
  position: text("position").notNull(),
  company: text("company").notNull(),
  startDate: int("startDate", { mode: "timestamp_ms" }).notNull(),
  endDate: int("endDate", { mode: "timestamp_ms" }).notNull(),
  description: text("description").notNull(),
  createdAt: int("createdAt", { mode: "timestamp_ms" }).notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp_ms" }).notNull(),
});

export const experiencesRelations = relations(experiences, ({ one }) => ({
  resume: one(resumes, {
    fields: [experiences.id],
    references: [resumes.id],
  }),
}));

export default experiences;
