import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./db/db.js";
import authRoutes from "./routes/auth.routes.js";
import todoRoutes from "./routes/todo.routes.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

// Middlewares
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/todos", todoRoutes);

connectToDatabase();

// Listening to port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server running on port : ${port}`);
});
