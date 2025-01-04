import { env } from "@/env";
import { db } from ".";
import * as schema from "@/lib/db/schema";
import * as seeds from "./seeds";

if (!env.DB_SEEDING) {
  throw new Error('You must set DB_SEEDING to "true" when running seeds');
}

// USE EXECUTE IN POSTGRES TO RESET TABLES
// async function resetTable(db: db, table: Table) {
// 	return db.execute(sql`truncate table ${table} restart identity cascade`);
// }

async function seedDatabase() {
  for (const table of [schema.users, schema.resumes]) {
    // if (table === schema.users) {
    //   console.log("users", table.name);
    // }
    await db.delete(table);
  }

  await seeds.resumes(db);
}

seedDatabase()
  .catch((err) => {
    console.error("Error seeding database:", err);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Seeding complete");
    process.exit(0);
  });
