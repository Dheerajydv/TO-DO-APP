import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import Signup from "../src/pages/Signup";
import { useContext } from "react";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <ThemeContextProvider>
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
    </ThemeContextProvider>
  );
}

export default App;
