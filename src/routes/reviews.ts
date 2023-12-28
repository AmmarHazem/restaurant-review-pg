import express from "express";
import { addReview } from "../controllers/reviews";

const router = express.Router();

router.post("/", addReview);

export default router;
