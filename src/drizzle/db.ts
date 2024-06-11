import "dotenv/config";
import * as schema from "./schema"
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';


const sql = neon(process.env.database_url!);

const db = drizzle(sql, { schema, logger: true })  //create a drizzle instance

export default db;  //export the drizzle instance

