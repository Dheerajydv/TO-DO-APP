import React, { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoBox() {
  const { todos, setTodos } = useContext(TodoContext);

  return (
    <div className="w-11/12 flex flex-col justify-start items-center sm:w-4/5 lg:w-2/3 xl:w-2/4">
      {/* <h1>todos</h1> */}
      {todos.map((todo) => (
        <Todo key={todo.todo} todo={todo} />
      ))}
    </div>
  );
}
