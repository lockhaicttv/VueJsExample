import { Router } from "express";
import { getDataMatchesbyId, getDataMatches } from "@/controllers/matches";

const router = Router();
router.get("/", getDataMatches);
router.get("/:id", getDataMatchesbyId);

export default router;
