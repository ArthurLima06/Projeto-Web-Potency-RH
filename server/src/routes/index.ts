import { Router } from "express";
import authRoutes from "./authRoutes";
import jobRoutes from "./jobRoutes";

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: "ok",
      service: "potency-rh-server",
      timestamp: new Date().toISOString(),
    },
  });
});

router.use("/auth", authRoutes);
router.use("/jobs", jobRoutes);

export default router;
