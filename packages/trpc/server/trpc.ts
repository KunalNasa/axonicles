// import superjson from "superjson";

import { initTRPC } from "@trpc/server";
import { errorFormatter } from "./errorFormatter";
import { createContextInner } from "./trpcContext";

export const tRPCContext = initTRPC.context<typeof createContextInner>().create({
  errorFormatter,
});

export const router = tRPCContext.router;
export const mergeRouters = tRPCContext.mergeRouters;
export const middleware = tRPCContext.middleware;
export const procedure = tRPCContext.procedure;
export const createCallerFactory = tRPCContext.createCallerFactory;
