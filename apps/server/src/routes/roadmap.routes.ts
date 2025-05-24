import { RequestHandler, Router } from "express";
import { verifyUser } from "../middlewares/verifyUser";
import { fetchAllRoadmaps, generateRoadmap } from "../controllers/roadmap.controller";

const router = Router();
router.use(verifyUser as RequestHandler);
router.get('/all-roadmaps', fetchAllRoadmaps);
router.get('/generate-roadmap', generateRoadmap);

export default router;
