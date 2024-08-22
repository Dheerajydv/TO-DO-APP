import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Todo(props) {
  const [isCompleted, setIsCompleted] = useState(props.todo.completed);
  const handleComplete = async (e) => {
    e.preventDefault();
    const result = await axios.post(`/api/v1/todos/markdone/${props.todo._id}`);
    toast.success(result.data.message);
    if (isCompleted) {
      setIsCompleted(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("Delete");
    const result = await axios.delete(`/api/v1/todos/delete/${props.todo._id}`);
    console.log(result.data.message);
    toast.success(`${result.data.message}, Refresh the page to update`);
  };
  return (
    <div
      className={
        isCompleted
          ? "bg-blue-400 hover:bg-blue-600 rounded-xl flex justify-around items-center min-h-12 w-11/12 my-4 "
          : "bg-blue-500 hover:bg-blue-700 rounded-xl flex justify-around items-center min-h-12 w-11/12 my-4 "
      }
    >
      <div onClick={handleComplete} className="w-3/5 flex items-center gap-2 ">
        <button
          name="completedBtn"
          onClick={handleComplete}
          className="bg-red-100  h-2/5 "
        >
          {isCompleted ? "❗" : "✅"}
        </button>
        <p className={isCompleted ? "truncate line-through" : "truncate"}>
          {props.todo.todo}
        </p>
      </div>
      <div className="h-2/5 flex justify-between items-center gap-2">
        <button name="deleteBtn" onClick={handleDelete} className="bg-red-100 ">
          ❌
        </button>
      </div>
      <Toaster position="botton-right" />
    </div>
  );
}
