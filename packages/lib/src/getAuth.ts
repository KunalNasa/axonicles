// auth.ts
import { connectDB } from "@axonicles/db/dbClient";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
  if (!authInstance) {
    const client = await connectDB();
    authInstance = betterAuth({
      database: mongodbAdapter(client),
    });
  }
  return authInstance;
};

// const auth = await getAuth();
