import { model, Schema } from "mongoose";

export const userSchema = new Schema({
  email: { type: String, unique: true },
  name: String,
  password: String,
});

export const User = model("User", userSchema);
