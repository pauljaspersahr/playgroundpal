import { model, Schema, Document } from "mongoose";

export type UserType = {
  email: string;
  name: string;
};

type UserModel = UserType & Document;

export const userSchema = new Schema<UserModel>({
  email: { type: String, unique: true },
  name: String,
});

export const User = model<UserModel>("User", userSchema);
