import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import Signup from "../src/pages/Signup";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  // const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
