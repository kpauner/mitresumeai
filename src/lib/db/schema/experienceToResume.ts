import { int, sqliteTable } from "drizzle-orm/sqlite-core";
import { experiences, resumes } from ".";
import { relations } from "drizzle-orm";

const experienceToResume = sqliteTable("experience_to_resume", {
  id: int("id").primaryKey({ autoIncrement: true }),
  experienceId: int("experience_id")
    .notNull()
    .references(() => experiences.id, { onDelete: "cascade" }),
  resumeId: int("resume_id")
    .notNull()
    .references(() => resumes.id),
});

export const experienceToResumeRelations = relations(
  experienceToResume,
  ({ one }) => ({
    experience: one(experiences, {
      fields: [experienceToResume.experienceId],
      references: [experiences.id],
    }),
    resume: one(resumes, {
      fields: [experienceToResume.resumeId],
      references: [resumes.id],
    }),
  }),
);

export default experienceToResume;
