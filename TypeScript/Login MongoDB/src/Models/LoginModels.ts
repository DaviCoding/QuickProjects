import client from "../Database/connect.ts";
const db = client.db();
const usersCollection = db.collection("Users");

export default usersCollection;
