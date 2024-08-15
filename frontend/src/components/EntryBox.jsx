import React from "react";

export default function EntryBox() {
  return (
    <div className="h-32 w-2/4">
      <input
        type="text"
        name="username"
        // value={data.username}
        // onChange={(e) => setData((data.username = e.target.value))}
        className="h-12 w-8/12 rounded-lg px-4 py-0 border border-black mx-2 "
        placeholder="Enter you Todo"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white h-12 w-3/12 mx-2 rounded-lg px-2 ">
        Add
      </button>
    </div>
  );
}
