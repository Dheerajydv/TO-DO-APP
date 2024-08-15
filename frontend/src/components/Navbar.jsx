import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div
      className={
        theme === "dark"
          ? `h-16 w-full flex items-center justify-between px-60 bg-black text-white`
          : `h-16 w-full flex items-center justify-between px-60`
      }
    >
      <h1 className="font-extrabold text-2xl">ToDo-List</h1>
      <div>
        <img
          className="h-full w-14 rounded-full"
          src={
            theme === "light"
              ? "../../public/assets/moon.png"
              : "../../public/assets/sun.png"
          }
          onClick={changeTheme}
        />
      </div>
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
