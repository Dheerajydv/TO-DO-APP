import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";

export default function TodoBox() {
  const [todos, setTodos] = useState([]);
  const getAllTodos = async () => {
    const response = await axios.get("/api/v1/todos/all");
    const result = response.data;
    setTodos(result);
  };
  useEffect(() => {
    getAllTodos();
  }, [setTodos]);

  return (
    <div className="w-11/12 flex flex-col justify-start items-center sm:w-4/5 lg:w-2/3 xl:w-2/4">
      {/* <button onClick={getAllTodos}>get all</button> */}
      {todos.map((todo) => (
        <Todo key={todo.todo} todo={todo} />
      ))}
    </div>
  );
}
