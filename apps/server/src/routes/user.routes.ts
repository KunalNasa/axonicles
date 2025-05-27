import { RequestHandler, Router } from "express";
import { verifyUser } from "../middlewares/verifyUser";
import { fetchAllRoadmapsOfUser, userDetails } from "../controllers/user.controller";



const router = Router();

router.use(verifyUser as RequestHandler);

router.get('/me', userDetails);
router.get('/all-roadmaps', fetchAllRoadmapsOfUser);


export default router;