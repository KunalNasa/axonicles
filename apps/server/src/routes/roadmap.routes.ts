import { RequestHandler, Router } from "express";
import { verifyUser } from "../middlewares/verifyUser";
import { addSubtopicResources, generateRoadmap, searchGlobalRoadmaps, searchUserRoadmaps, startTask, updateSubtopicDescription, updateSubtopicStatus, updateTaskCompletion } from "../controllers/roadmap.controller";

const router = Router();

// global un-protected route
router.get('/all-roadmaps', searchGlobalRoadmaps);

// protected routes
router.use(verifyUser as RequestHandler);

router.post('/generate-roadmap', generateRoadmap);
router.get('/task-update', updateTaskCompletion);
router.get('/start-task', startTask);
router.get('/add-subtopic-resource', addSubtopicResources);
router.get('/update-subtopic-description', updateSubtopicDescription);
router.get('/update-subtopic-status', updateSubtopicStatus);
router.get('/search-user-roadmaps',searchUserRoadmaps);


export default router;
