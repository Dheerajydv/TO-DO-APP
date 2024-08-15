import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <form className="shadow-2xl h-4/5 w-2/6 flex flex-col justify-center items-center gap-8">
        <h1 className="font-extrabold text-2xl">Signup</h1>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={(e) => setData((data.username = e.target.value))}
          className="h-12 w-6/12 rounded-lg px-4 py-0 border border-black  "
          placeholder="Enter you Username"
        />
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={(e) => setData((data.email = e.target.value))}
          className="h-12 w-6/12 rounded-lg px-4 py-0 border border-black  "
          placeholder="Enter you Email"
        />
        <input
          type="text"
          name="password"
          value={data.password}
          onChange={(e) => setData((data.password = e.target.value))}
          className="h-12 w-6/12 rounded-lg px-4 py-0 border border-black "
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
    </div>
  );
}
