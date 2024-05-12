import { User } from "@models/User";

export default defineEventHandler(async (event) => {
  try {
    const userData = await readBody(event);
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  } catch (e) {
    console.error("user/index.post.ts error:");
    console.error(e);
  }
});
