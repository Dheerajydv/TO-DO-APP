import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

export default function Signup() {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { username, email, password } = data;
      const result = await axios.post("/api/v1/auth/signup", {
        username,
        email,
        password,
      });
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className={
          theme === "dark"
            ? "h-screen w-screen flex justify-center items-center bg-gray-950 text-white"
            : "h-screen w-screen flex justify-center items-center "
        }
      >
        <form className="shadow-2xl border rounded-xl h-full w-full flex flex-col justify-center items-center gap-8 sm:w-10/12 sm:h-5/6 md:w-3/4 md:h-4/5 lg:w-3/5 lg:h-4/5 xl:w-4/12 xl:h-4/5">
          <h1 className="font-extrabold text-2xl">Signup</h1>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            className={
              theme === "dark"
                ? "h-12 w-6/12 rounded-lg px-4 py-0 border bg-gray-950 text-white border-white"
                : "h-12 w-6/12 rounded-lg px-4 py-0 border border-black"
            }
            placeholder="Enter you Username"
          />
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            className={
              theme === "dark"
                ? "h-12 w-6/12 rounded-lg px-4 py-0 border bg-black text-white border-white"
                : "h-12 w-6/12 rounded-lg px-4 py-0 border border-black"
            }
            placeholder="Enter you Email"
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            className={
              theme === "dark"
                ? "h-12 w-6/12 rounded-lg px-4 py-0 border bg-black text-white border-white"
                : "h-12 w-6/12 rounded-lg px-4 py-0 border border-black"
            }
            placeholder="Enter your password"
          />
          <button
            onClick={handleSignup}
            className="h-12 w-6/12 rounded-lg px-4 py-0 bg-blue-500 hover:bg-blue-700 text-white"
          >
            Signup
          </button>
          <Link
            to="/login"
            className="text-blue-500 underline text-lg hover:text-blue-700"
          >
            Login
          </Link>
        </form>
        <Toaster />
      </div>
    </>
  );
}
