"use strict";
// import { migrate } from "drizzle-orm/neon-http/migrator";
// import { db } from "./db";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
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
const drizzle_orm_1 = require("drizzle-orm");
const up = async (client) => {
    console.log("======Migration Started ======");
    try {
        await client.query((0, drizzle_orm_1.sql) `
      ALTER TABLE your_table 
      ALTER COLUMN created_at 
      TYPE timestamp without time zone 
      USING created_at::timestamp without time zone;
    `);
        console.log("======Migration Completed ======");
    }
    catch (error) {
        console.error('Migration failed with error:', error);
        throw error;
    }
    finally {
        await client.end();
    }
};
exports.up = up;
const down = async (client) => {
    // Provide the reverse migration if necessary
};
exports.down = down;
