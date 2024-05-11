import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();

  try {
    const uri = process.env.MONGODB_URI || "";
    console.log(uri);
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
};
