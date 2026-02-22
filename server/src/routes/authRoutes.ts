import { Router } from "express";
import { authController } from "../controllers/authController";
import { asyncHandler } from "../utils/asyncHandler";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

router.post("/register", asyncHandler(authController.register));
router.post("/login", asyncHandler(authController.login));
router.post("/refresh", asyncHandler(authController.refresh));
router.post("/logout", authenticate, asyncHandler(authController.logout));
router.get("/me", authenticate, asyncHandler(authController.me));

export default router;
