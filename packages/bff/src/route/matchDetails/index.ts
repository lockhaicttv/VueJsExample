import { Router } from "express";
import getMatchDetails from "@/controllers/matchDetail/index";

const router = Router();
router.get("/:id", getMatchDetails);
export default router;
