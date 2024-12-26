import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { config } from "dotenv"

import { env } from "~/app/env";
config({ path: '../../.env.local' })

const sql = neon(env.DATABASE_URL)

//logger
//const db = drizzle(sql, {logger: true})
const db = drizzle(sql)
export { db }