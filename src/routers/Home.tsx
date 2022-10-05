import React from "react";
import "../styles/Home.scss";
const Main: React.FC = () => {
  return (
    <div className="Home-bg d-flex">
      <div className="card custom-card mx-auto">
        <div className="mb-3 ">
          <div className="form-label  text-align">
            Input Record Code
          </div>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
          <button className="btn btn-grad mb-3" type="button">
            Submit
          </button>
          <a href="/gif" className="mx-auto text-color">I am feeling lucky today - Get a random Gif </a>
       
      </div>
    </div>
  );
};

export default Main;
