import { Routes, Route } from "react-router-dom";

import Login from "../src/pages/Login";
import Navbar from "../src/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
