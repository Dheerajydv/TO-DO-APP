import React from "react";

export default function Todo(props) {
  const handleComplete = () => {
    console.log("completed");
  };
  const handleEdit = () => {
    console.log("edit");
  };
  const handleDelete = () => {
    console.log("Delete");
  };
  return (
    <div className="bg-blue-500 hover:bg-blue-700 rounded-xl flex justify-around items-center min-h-12 w-11/12 my-4 ">
      <div className="w-3/5 flex items-center gap-2 ">
        <button
          name="completedBtn"
          onClick={handleComplete}
          className="bg-red-100  h-2/5 "
        >
          ✔
        </button>
        <p className="truncate">{props.todo}</p>
      </div>
      <div className="h-2/5 flex justify-between items-center gap-2">
        <button name="editBtn" onClick={handleEdit} className="bg-red-100 ">
          ✏
        </button>
        <button name="deleteBtn" onClick={handleDelete} className="bg-red-100 ">
          ❌
        </button>
      </div>
    </div>
  );
}
