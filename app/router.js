import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/", controller.getHome);
router.post("/", controller.postMessage);

export default router;
