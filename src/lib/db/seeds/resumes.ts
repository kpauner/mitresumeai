import { db } from "@/lib/db";
import data from "@/lib/db/seeds/data/resumes.json";
import { InsertResumes } from "@/features/resumes/types/resumes.types";
import { resumes } from "../schema";

export default async function seed(db: db) {
  const formattedData: InsertResumes[] = data.map((resume) => ({
    title: resume.title,
    description: resume.description,
    imageUrl: resume.imageUrl,
    hexColor: resume.hexColor,
    firstName: resume.firstName,
    lastName: resume.lastName,
    jobTitle: resume.jobTitle,
    city: resume.city,
    country: resume.country,
    phoneNumber: resume.phoneNumber,
    email: resume.email,
    userId: resume.userId,
  }));
  if (!formattedData) {
    return;
  }
  await db.insert(resumes).values(formattedData);
}
