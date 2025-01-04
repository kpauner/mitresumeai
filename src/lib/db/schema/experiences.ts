import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";
import { resumes } from ".";
import { relations, sql } from "drizzle-orm";

const experiences = sqliteTable("experiences", {
  id: int().primaryKey({ autoIncrement: true }),
  position: text("position").notNull(),
  company: text("company").notNull(),
  description: text("description").notNull(),
  startDate: text("startDate").notNull(),
  endDate: text("endDate"),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const experiencesRelations = relations(experiences, ({ one }) => ({
  resume: one(resumes, {
    fields: [experiences.id],
    references: [resumes.id],
  }),
}));

export default experiences;
