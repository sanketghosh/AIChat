import express from "express";
import { postRouteHandler } from "../controllers/api.controller.js";

const router = express.Router();

router.route("/").post(postRouteHandler);

export default router;
