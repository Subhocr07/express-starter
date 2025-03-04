import express from "express";
import userRoutes from "./user.routes.ts";
import authRoutes from "./auth.route.ts";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
