import "./App.scss";
import { Routes, Route } from "react-router-dom";
import InputPage from "./routers/Input";
import GifPage from "./routers/Gif";
import HomePage from "./routers/Home";
import RecordPage from "./routers/Record";
import React from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

const App: React.FC = () => {
  const AlertTemplate = ({
    options,
    message,
  }: {
    options: any;
    message: any;
  }) => (
    <div
      className={`alert m-3 ${
        options.type === "error"
          ? "alert-danger"
          : options.type === "error"
          ? "alert-primary"
          : "alert-secondary"
      }`}
    >
      {message}
    </div>
  );
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 2000,
    offset: "150px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/gif" element={<GifPage />} />
        <Route path="/record" element={<RecordPage />} />
      </Routes>
    </AlertProvider>
  );
};

export default App;
