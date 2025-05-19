import {fetchRequestHandler} from "@trpc/server/adapters/fetch"
import { appRouter } from "@axonicles/trpc/trpc";
import {createContextInner} from "@axonicles/trpc/trpc"

const handler = (req: Request) => {
    return fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: async (opts) => {
            // Adapt createContextInner to match the expected type
            return createContextInner({session: null});
        }
    })
}

export {handler as GET, handler as POST};
