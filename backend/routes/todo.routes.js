import { Router } from "express";
import { getAllTodos } from "../controllers/todo.controllers.js";
import { verifyUser } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/all", verifyUser, getAllTodos);

export default router;
