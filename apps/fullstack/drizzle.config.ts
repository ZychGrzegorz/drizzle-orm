import {defineConfig} from 'drizzle-kit';
import { env } from "~/app/env";


export default defineConfig({
schema: "./app/db/schema.ts",
out: "./app/db/migrations",
dialect: "postgresql",
dbCredentials:{
    url: env.DATABASE_URL,
}
})