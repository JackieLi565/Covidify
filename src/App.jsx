import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Portal from "./Components/Portal";
import React from "react";

function App() {
    return (  
        <>
            <Routes>
                <Route path="/Receipt" element={<Home/>}></Route>
                <Route path="/" element={<Portal/>}></Route>
            </Routes>
        </>
    );
}

export default App;