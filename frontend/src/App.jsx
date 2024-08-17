import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import Signup from "../src/pages/Signup";
import { useContext, useEffect } from "react";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    const accessToken = document.cookie.replace("accessToken=", "");
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);
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
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
