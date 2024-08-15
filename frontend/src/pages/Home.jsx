import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import EntryBox from "../components/EntryBox";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? `h-screen w-screen bg-black text-white`
          : `h-screen w-screen`
      }
    >
      <Navbar />
      <div className="flex my-4 justify-center">
        <EntryBox />
      </div>
    </div>
  );
}
