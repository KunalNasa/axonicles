
import { procedure, router } from "./server/trpc";
import { createContextInner } from "./server/trpcContext";

export const appRouter = router({
    getTodos: procedure.query(async () => {
        return [10, 20, 30];
    })
});

export type AppRouter = typeof appRouter;
export {createContextInner}