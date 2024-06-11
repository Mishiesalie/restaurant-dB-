"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require("dotenv/config");
const schema = __importStar(require("./schema"));
const serverless_1 = require("@neondatabase/serverless");
const neon_http_1 = require("drizzle-orm/neon-http");
const Database_URL = process.env.DATABASE_URL;
if (!Database_URL)
    throw new Error("DATABASE_URL is not set");
const sql = (0, serverless_1.neon)(Database_URL);
exports.db = (0, neon_http_1.drizzle)(sql, { schema, logger: true });
// import "dotenv/config";
// import { drizzle, NeonHttpDatabase } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
// import * as schema from './schema';
// const databaseUrl = process.env.DATABASE_URL as string;
// if (!databaseUrl) throw new Error("DATABASE_URL is not set");
// const sql = neon(databaseUrl);
// export const db: NeonHttpDatabase<typeof schema> = drizzle(sql, { schema, logger: true });
// import "dotenv/config";
// import { config } from "../../node_modules/dotenv/lib/main";
// config({ path: ".env" });
// if (!databaseUrl) {
//   throw new Error("DATABASE_URL is not set");
// }
// const posts = await sql('SELECT * FROM posts');
// mport "dotenv/config";
// import {drizzle} from "drizzle-orm/node-postgres";
// // // import { Client } from "pg";
// import * as schema from "./schema"
// // // export const client = new Client({
// //     connectionString: process.env.database_URL  as string,   //database url
// // })
// // const main = async () => {
// //     await client.connect(); 
// // }
// // main(); //  connect to database 
// // const db = drizzle(client, {schema, logger: true}) // to  create drizzle instance
// export default db;  // export drizzle instance
// // import "dotenv/config";
// // import {  NeonHttpDatabase } from "drizzle-orm/neon-http";
// // const databaseUrl = process.env.DATABASE_URL as string;
// // if (!databaseUrl) throw new Error("DATABASE_URL is not set");
// // const sql = neon(databaseUrl);
// // export const db: NeonHttpDatabase<typeof schema> = drizzle(sql, { schema, logger: true });
// // import { drizzle } from "drizzle-orm/neon-http";
// // import { neon } from "@neondatabase/serverless";
// // import { config } from "dotenv";
// // config({ path: ".env" });
// // const sql = neon(process.env.DATABASE_URL!);
// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
// import { config } from "dotenv";
// // config({ path: ".env" });
// // // const sql = neon(process.env.DATABASE_URL!);
// // // export const db = drizzle(sql);
// // import { neon } from '@neondatabase/serverless';
// // import { neon } from "@neondatabase/serverless";
// // import { config } from "dotenv";
// config({ path: ".env" });
// const databaseUrl = process.env.DATABASE_URL;
// if (!databaseUrl) {
//   throw new Error("DATABASE_URL is not set");
// }
// const sql = neon(databaseUrl);
// const posts = await sql('SELECT * FROM posts');
// // // const posts = await sql('SELECT * FROM posts');
// // // // See https://neon.tech/docs/serverless/serverless-driver
// // // // for more information
// import "dotenv/config";
// import { drizzle, NeonHttpDatabase } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
// import * as schema from './schema';
// const databaseUrl = process.env.DATABASE_URL as string;
// if (!databaseUrl) throw new Error("DATABASE_URL is not set");
// const sql = neon(databaseUrl);
// export const db: NeonHttpDatabase<typeof schema> = drizzle(sql, { schema, logger: true });
// import { config } from "dotenv";
// config({ path: ".env" });
// if (!databaseUrl) {
//   throw new Error("DATABASE_URL is not set");
// }
// const posts = await sql('SELECT * FROM posts');
