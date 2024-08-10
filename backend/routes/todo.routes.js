import { Router } from "express";
import {
  getAllTodos,
  createTodo,
  editTodo,
  markTodoComplete,
  deleteTodo,
} from "../controllers/todo.controllers.js";
import { verifyUser } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/all", verifyUser, getAllTodos);
router.post("/createtodo", verifyUser, createTodo);
router.post("/edittodo/:id", verifyUser, editTodo);
router.post("/markdone/:id", verifyUser, markTodoComplete);
router.delete("/delete/:id", verifyUser, deleteTodo);

export default router;
