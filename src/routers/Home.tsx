import React from "react";
import "../styles/Home.scss";
const Main: React.FC = () => {
  return (
    <div className="Home-bg d-flex">
      <div className="card custom-card mx-auto">
        <div className="mb-3">
          <label className="form-label text-align-center">
            Input Record Code
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
          <button className="btn btn-primary mb-3" type="button">
            Submit
          </button>
          <a href="/gif" className ="stretched-link mx-auto">I am feeling lucky today - Get a random Gif </a>
       
      </div>
    </div>
  );
};

export default Main;
