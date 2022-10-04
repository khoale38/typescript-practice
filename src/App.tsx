
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import InputPage from "./routers/Input";
import GifPage from "./routers/Gif";
import MainPage from "./routers/Home";
import React from "react";

const  App :React.FC =() => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/input" element={<InputPage />} />
      <Route path="/gif" element={<GifPage />} />

    </Routes>
  );
}

export default App;
