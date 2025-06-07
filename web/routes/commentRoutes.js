import express from "express";
import { addComment, deleteComment } from "../controllers/commentController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/:postId", verifyToken, addComment);
router.delete("/:postId/:commentId", verifyToken, deleteComment);

export default router;
