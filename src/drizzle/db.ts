



import "dotenv/config";
// import {drizzle} from "drizzle-orm/node-postgres";
// import { Client } from "pg";
import * as schema from "./schema"

// export const client = new Client({
//     connectionString: process.env.database_URL  as string,   //database url

// })
// const main = async () => {
//     await client.connect(); 

// }
// main(); //  connect to database 

// const db = drizzle(client, {schema, logger: true}) // to  create drizzle instance

// export default db;  // export drizzle instance

// import "dotenv/config";
// import {  NeonHttpDatabase } from "drizzle-orm/neon-http";
// const databaseUrl = process.env.DATABASE_URL as string;
// if (!databaseUrl) throw new Error("DATABASE_URL is not set");

// const sql = neon(databaseUrl);

// export const db: NeonHttpDatabase<typeof schema> = drizzle(sql, { schema, logger: true });

// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
// import { config } from "dotenv";

// config({ path: ".env" });

// const sql = neon(process.env.DATABASE_URL!);
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

// config({ path: ".env" });

// // const sql = neon(process.env.DATABASE_URL!);
// // export const db = drizzle(sql);
// import { neon } from '@neondatabase/serverless';

// import { neon } from "@neondatabase/serverless";
// import { config } from "dotenv";

config({ path: ".env" });

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

const sql = neon(databaseUrl);

const posts = await sql('SELECT * FROM posts');

// const posts = await sql('SELECT * FROM posts');

// // See https://neon.tech/docs/serverless/serverless-driver
// // for more information
