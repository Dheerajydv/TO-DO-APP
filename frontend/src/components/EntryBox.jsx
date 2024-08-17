import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function EntryBox() {
  const { theme } = useContext(ThemeContext);
  const [todo, setTodo] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(todo);
  };
  return (
    <div className="h-32 flex justify-center items-center w-4/5 sm:w-9/12 lg:w-3/5 xl:w-2/4">
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className={
          theme === "dark"
            ? "h-12 w-8/12 rounded-lg px-4 py-0 border border-white bg-black mx-2"
            : "h-12 w-8/12 rounded-lg px-4 py-0 border border-black mx-2"
        }
        placeholder="Enter you Todo"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-700 text-white h-12 w-3/12 mx-2 rounded-lg px-2 "
      >
        Add
      </button>
    </div>
  );
}
