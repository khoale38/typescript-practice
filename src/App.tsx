
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import InputPage from "./routers/Input";
import GifPage from "./routers/Gif";
import HomePage from "./routers/Home";
import RecordPage from "./routers/Record";
import React from "react";

const  App :React.FC =() => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/input" element={<InputPage />} />
      <Route path="/gif" element={<GifPage />} />
      <Route path="/record" element={<RecordPage />} />
    </Routes>
  );
}

export default App;
