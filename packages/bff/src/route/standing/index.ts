import { Router } from "express";
const router = Router();

import get_all_data_standing from "@/controllers/standing";

router.get("/", get_all_data_standing);

export default router;
