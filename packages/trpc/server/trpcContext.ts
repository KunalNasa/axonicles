// server/context.ts
import type { NextApiRequest, NextApiResponse } from "next";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getServerSession } from "next-auth"; // use this once NextAuth is added
import {RoadmapModel} from "@axonicles/db/dbClient"

type CreateInnerContextOptions = {
  session?: any; // Replace with `Session | null` once NextAuth is added
};

/**
 * This context is reusable and testable (does not depend on req/res)
 */
export const createContextInner = async (opts: CreateInnerContextOptions) => {
  return {
    models: {
      RoadmapModel,
    },
    session: opts.session ?? null,
  };
};

/**
 * This is the actual context used in tRPC routers
 */
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Later when you add next-auth:
  const session = await getServerSession(req, res, authOptions);
//   const session = null; // Placeholder for now

  const innerContext = await createContextInner({ session });

  return {
    ...innerContext,
    req,
    res,
  };
};

export type TRPCContext = Awaited<ReturnType<typeof createContext>>;
export type TRPCContextInner = Awaited<ReturnType<typeof createContextInner>>;
