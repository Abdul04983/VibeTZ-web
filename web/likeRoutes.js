import express from "express";
import { likePost, unlikePost } from "../controllers/likeController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/:postId/like", verifyToken, likePost);
router.post("/:postId/unlike", verifyToken, unlikePost);

export default router;
