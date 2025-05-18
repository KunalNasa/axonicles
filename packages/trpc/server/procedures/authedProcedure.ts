import authMiddleware from "../middlewares/authMiddleware";
import { procedure } from "../trpc";

const authedProcedure = procedure.use(authMiddleware);

export default authedProcedure;
