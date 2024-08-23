import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import EntryBox from "../components/EntryBox";
import { ThemeContext } from "../contexts/ThemeContext";
import TodoBox from "../components/TodoBox";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? `h-screen w-screen bg-gray-950 text-white`
          : `h-screen w-screen`
      }
    >
      <Navbar />
      <div className="flex mt-4  w-screen items-center justify-center">
        <EntryBox />
      </div>
      <div className="flex min-h-screen my-4 w-screen flex-col items-center justify-start">
        <TodoBox />
      </div>
    </div>
  );
}
