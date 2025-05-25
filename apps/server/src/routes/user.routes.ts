import { RequestHandler, Router } from "express";
import { verifyUser } from "../middlewares/verifyUser";
import { userDetails } from "../controllers/user.controller";


const router = Router();

router.use(verifyUser as RequestHandler);

router.get('/me', userDetails);

export default router;