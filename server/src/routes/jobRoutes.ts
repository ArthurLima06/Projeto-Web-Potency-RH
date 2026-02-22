import { Router } from "express";
import { jobController } from "../controllers/jobController";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(jobController.list));

export default router;
