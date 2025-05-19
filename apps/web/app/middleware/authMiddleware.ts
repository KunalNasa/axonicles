import { TRPCError } from "@trpc/server";
import { middleware } from "../server/trpc";

export const authMiddleware = middleware(async (opts) => {
    const {ctx} = opts;
    const userId = ctx.userId;
    console.log("userId", userId);
    if(!userId){
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    const user = await ctx.db.User.findById({
        _id : userId     
    });
    if(!user){
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    console.log("Middleware verification succeeded");
    return opts.next({
        ctx: {
          user
        },
      });

})