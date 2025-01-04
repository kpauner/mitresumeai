import { resumes } from "@/lib/db/schema";
import { z } from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const SelectResumesSchema = createSelectSchema(resumes);
export const InsertResumesSchema = createInsertSchema(resumes);

export type SelectResumes = z.infer<typeof SelectResumesSchema>;
export type InsertResumes = z.infer<typeof InsertResumesSchema>;
