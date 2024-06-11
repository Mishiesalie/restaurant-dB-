import { strict } from "assert";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    dbCredentials: {
        url: process.env.database_url as string,
    },
    verbose: true,
    strict: true
})
