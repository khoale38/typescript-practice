
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routers/Home";
import TempPage from "./routers/Temp";
import React from "react";

const  App :React.FC =() => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/temp" element={<TempPage />} />

    </Routes>
  );
}

export default App;
