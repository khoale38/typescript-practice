import React from "react";
import Card from "../components/Card";

import "../styles/Home.scss";


const Home: React.FC = () => {
  return (
    <div className="background">
      <h1 className="heading  pt-5 pb-3">Message Record</h1>
      <Card></Card>
    </div>
  );
};

export default Home;
