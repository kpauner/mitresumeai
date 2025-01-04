import { int, sqliteTable } from "drizzle-orm/sqlite-core";
import { experiences, experienceToResume, resumes } from ".";
import { relations } from "drizzle-orm";
import educations from "./educations";

const educationToResume = sqliteTable("education_to_resume", {
  id: int("id").primaryKey({ autoIncrement: true }),
  educationId: int("education_id")
    .notNull()
    .references(() => experiences.id, { onDelete: "cascade" }),
  resumeId: int("resume_id")
    .notNull()
    .references(() => resumes.id),
});

export const educationToResumeRelations = relations(
  educationToResume,
  ({ one }) => ({
    education: one(educations, {
      fields: [educationToResume.educationId],
      references: [educations.id],
    }),
    resume: one(resumes, {
      fields: [educationToResume.resumeId],
      references: [resumes.id],
    }),
  }),
);

export default experienceToResume;
