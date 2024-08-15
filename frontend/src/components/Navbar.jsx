import React, { useState } from "react";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="bg-black text-white h-16 w-full flex items-center justify-between px-60">
      <h1 className="font-extrabold text-2xl">ToDo-List</h1>
      {/* If  user logged in then show button and pfp otherwise enpty*/}
      {isAuthenticated ? (
        <div className="flex justify-between h-full items-center gap-4">
          <div>
            <img
              src="../public/assets/pfp.jpg"
              className="h-full w-14 rounded-full"
            />
          </div>
          <button className="h-4/5 w-24 bg-blue-500 text-white rounded-xl text-lg hover:bg-blue-700 ">
            Logout
          </button>
        </div>
      ) : null}
    </div>
  );
}
