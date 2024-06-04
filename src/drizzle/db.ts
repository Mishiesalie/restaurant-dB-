import "dotenv/config";
import {drizzle} from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema"

export const client = new Client({
    connectionString: process.env.database_URL  as string,   //database url

})
const main = async () => {
    await client.connect(); 

}
main(); //  connect to database 

const db = drizzle(client, {schema, logger: true}) // to  create drizzle instance

export default db;  // export drizzle instance
