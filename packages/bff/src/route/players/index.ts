import { Router } from "express";
import { getPlayers } from "@/controllers/players";
import { getTrending } from "@/controllers/players";

const router = Router();
router.get("/", getPlayers);
router.get("/trending", getTrending);

export default router;
