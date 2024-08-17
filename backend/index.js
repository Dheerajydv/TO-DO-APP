import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./db/db.js";
import authRoutes from "./routes/auth.routes.js";
import todoRoutes from "./routes/todo.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Change to your frontend's URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/todos", todoRoutes);

connectToDatabase();

// Listening to port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server running on port : ${port}`);
});
