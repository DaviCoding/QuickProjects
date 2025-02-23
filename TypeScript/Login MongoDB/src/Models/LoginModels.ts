import mongoose from "mongoose";
export default mongoose.model(
  "users",
  new mongoose.Schema({
    name: { type: String, require: true },
    password: { type: String, require: true },
  })
);
