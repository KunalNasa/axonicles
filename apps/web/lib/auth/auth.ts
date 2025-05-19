// auth.ts
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import {getClientNative} from "@axonicles/db/dbClient"

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
  if (!authInstance) {
    authInstance = betterAuth({
      emailAndPassword: {  
        enabled: true
    },
    database: mongodbAdapter(await getClientNative()),

    });
  }
  return authInstance;
};

// const auth = await getAuth();
