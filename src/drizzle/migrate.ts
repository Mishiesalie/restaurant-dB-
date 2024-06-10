// import { migrate } from "drizzle-orm/neon-http/migrator";
// import { db } from "./db";

// async function migration() {
//   try {
//     console.log("======Migration Started ======");
//     await migrate(db, {
//       migrationsFolder: __dirname + "/migrations"
//     });
//     console.log("======Migration Ended======");
//     process.exit(0);
//   } catch (error) {
//     console.error("Migration failed with error: ", error);
//     process.exit(1);
//   }
// }

// migration().catch((e) => {
//   console.error("Unexpected error during migration:", e);
//   process.exit(1);
// });


import { sql } from 'drizzle-orm';
import { Client } from '@neondatabase/serverless';

export const up = async (client: Client) => {
  console.log("======Migration Started ======");
  try {
    await client.query(sql`
      ALTER TABLE your_table 
      ALTER COLUMN created_at 
      TYPE timestamp without time zone 
      USING created_at::timestamp without time zone;
    `);
    console.log("======Migration Completed ======");
  } catch (error) {
    console.error('Migration failed with error:', error);
    throw error;
  } finally {
    await client.end();
  }
};

export const down = async (client: Client) => {
  // Provide the reverse migration if necessary
};
