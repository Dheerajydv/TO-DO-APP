import React from "react";
import Todo from "./Todo";

export default function TodoBox() {
  return (
    <div className="w-11/12 flex flex-col justify-start items-center sm:w-4/5 lg:w-2/3 xl:w-2/4">
      <Todo todo={"this is todo"} />
      <Todo todo={"this is todo"} />
      <Todo todo={"this is todo"} />
      <Todo todo={"this is todo"} />
      <Todo todo={"this is todo"} />
    </div>
  );
}
