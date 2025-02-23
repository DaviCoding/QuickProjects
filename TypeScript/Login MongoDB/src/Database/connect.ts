import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(`${process.env.uri}`, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default client;
