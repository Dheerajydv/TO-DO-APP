import { Router } from "express";
import { getAllTodos, createTodo } from "../controllers/todo.controllers.js";
import { verifyUser } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/all", verifyUser, getAllTodos);
router.post("/createtodo", verifyUser, createTodo);

export default router;
