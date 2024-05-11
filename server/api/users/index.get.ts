import { model, Schema } from "mongoose";

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
});

export const User = model("User", userSchema);

export default defineEventHandler(async (event) => {
  const users = await User.find();

  return users;
});
