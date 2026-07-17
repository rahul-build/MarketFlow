import { Router } from "express";

import authRoutes from "./authRoutes.js";
import productRoutes from "./productRoutes.js";
import cartRoutes from "./cartRoutes.js";
import healthRoutes from "./healthRoutes.js";

const router = Router();

router.use("/auth", authRoutes);

router.use("/products", productRoutes);

router.use("/cart", cartRoutes);

router.use("/health", healthRoutes);

export default router;
