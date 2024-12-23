import { type MongoClient } from "mongodb";
import { env } from "~/app/env";


// import { env } from "@/env";
// import mongoClientPromise from "@/server/lib/mongodb";

import mongoClientPromise from "~/server/mongo/mongodb";
let _db: MongoClient;

export async function connectToServer() {
  const client = await mongoClientPromise;
  await client.connect();
  _db = client;
  return _db;
}

export async function getMongoClient(dbName: string = env.DB_NAME) {
  if (!_db) {
    console.log("could not find db");
    await connectToServer();
    console.log("hopefully connected to server");
  }
  return _db.db(dbName);
}
