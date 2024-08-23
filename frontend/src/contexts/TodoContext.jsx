import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
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
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
