
import { authMiddleware } from "../middleware/authMiddleware";
import { procedure } from "../server/trpc";

const authedProcedure = procedure.use(authMiddleware);

export default authedProcedure;
