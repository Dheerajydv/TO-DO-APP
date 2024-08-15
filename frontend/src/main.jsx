import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./themeContext/ThemeContext.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
