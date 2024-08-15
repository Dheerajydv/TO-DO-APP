import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div
        className={
          theme === "dark"
            ? "h-screen w-screen flex justify-center items-center bg-black text-white"
            : "h-screen w-screen flex justify-center items-center"
        }
      >
        <form className="border shadow-xl rounded-xl h-4/5 w-2/6 flex flex-col justify-center items-center gap-8">
          <h1 className="font-extrabold text-2xl">Login</h1>
          <input
            type="text"
            name="email"
            className="h-12 w-6/12 rounded-lg px-4 py-0 border border-black  "
            placeholder="Enter you Email"
          />
          <input
            type="text"
            name="password"
            className="h-12 w-6/12 rounded-lg px-4 py-0 border border-black "
            placeholder="Enter your password"
          />
          <button className="h-12 w-6/12 rounded-lg px-4 py-0 bg-blue-500 hover:bg-blue-700 text-white">
            Login
          </button>
          <Link
            to="/signup"
            className="text-blue-500 underline text-lg hover:text-blue-700"
          >
            Signup
          </Link>
        </form>
      </div>
    </>
  );
}
