import React, { useState } from "react";
import Navbar from "../components/Navbar";
import EntryBox from "../components/EntryBox";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [mode, setMode] = useState("black");
  return (
    <div className={`h-screen w-screen dark:bg-black`}>
      <Navbar />
      <div className="flex my-4 justify-center">
        <EntryBox />
      </div>
    </div>
  );
}
