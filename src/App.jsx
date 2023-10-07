import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Portal from "./Pages/Portal";
import React from "react";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Routes>
        <Route path="/Receipt" element={<Home />}></Route>
        <Route path="/" element={<Portal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
