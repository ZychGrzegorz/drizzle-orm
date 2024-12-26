import { db } from "~/app/db"
import { migrate } from "drizzle-orm/neon-http/migrator"

const main = async () => {
    try {
        await migrate(db, { migrationsFolder: "./app/db/migrations" })
        console.log('Migration completed')
    }
    catch (e) {
        console.log('error during migration: ',e)
        process.exit(1)
    }
}

main()