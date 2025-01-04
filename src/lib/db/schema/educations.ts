import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { resumes } from ".";
import { relations, sql } from "drizzle-orm";

const educations = sqliteTable("educations", {
  id: int().primaryKey({ autoIncrement: true }),
  degree: text("degree").notNull(),
  school: text("school").notNull(),
  description: text("description"),
  startDate: text("startDate").notNull(),
  endDate: text("endDate"),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const educationsRelations = relations(educations, ({ one }) => ({
  resume: one(resumes, {
    fields: [educations.id],
    references: [resumes.id],
  }),
}));

export default educations;
