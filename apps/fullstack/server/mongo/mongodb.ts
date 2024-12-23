import { MongoClient } from "mongodb";
import { env } from "process";

const _uri = env.DATABASE_URL;
const uri = _uri!
  .replaceAll("\u0026", "&")
  .replaceAll("\\", "")
  .replaceAll('"', "")
  .replaceAll("'", "");
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

try {
    if (process.env.NODE_ENV === "development") {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      const globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
      };
  
      if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
      }
      clientPromise = globalWithMongo._mongoClientPromise;
    } else {
      client = new MongoClient(uri, options);
      // console.log("in mongo connection: ", { uri, options, env });
      clientPromise = client.connect();
      // In production mode, it's best to not use a global variable.
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Error connecting to mongo: ${JSON.stringify({
          uri,
          options,
          errorMessage: error.message,
        })}`,
      );
    }
    throw new Error(
      `Error connecting to mongo: ${JSON.stringify({ uri, options, env })}`,
    );
  }
  
  // Export a module-scoped MongoClient promise. By doing this in a
  // separate module, the client can be shared across functions.
  export default clientPromise;