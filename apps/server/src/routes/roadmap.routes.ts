import { RequestHandler, Router } from "express";
import { verifyUser } from "../middlewares/verifyUser";
import { generateRoadmap, searchGlobalRoadmaps, searchUserRoadmaps } from "../controllers/roadmap.controller";

const router = Router();

// global un-protected route
router.get('/all-roadmaps', searchGlobalRoadmaps);

router.use(verifyUser as RequestHandler);
router.post('/generate-roadmap', generateRoadmap);
router.get('/get-user-roadmaps',searchUserRoadmaps);

export default router;
