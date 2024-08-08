import mongoose, { Schema } from "mongoose";
import User from "./user.model.js";

const todoSchema = new Schema(
  {
    todo: {
      type: String,
      required: true,
      unique: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
