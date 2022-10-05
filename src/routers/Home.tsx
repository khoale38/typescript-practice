import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.scss";
import { useRef, useState } from "react";
import ProfileService from "../service/ProfileService";
import Profile from "../models/Profile";

const Main: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  let form: Profile;
  async function axiosTest() {
    // create a promise for the axios request

    const promise = ProfileService.find(inputRef.current!.value);
    // using .then, create a new promise which extracts the data
    const dataPromise: Profile = await promise.then((response) => response);
    form = dataPromise;
  }
  function onClickHandle(e: any) {
    axiosTest();

    navigate("/record", {
      state: { 
        date: form.date,
        message: form.message,
        name: form.name,
        image: form.image,
      },
    });
  }

  return (
    <div className="Home-bg d-flex">
      <div className="card custom-card mx-auto">
        <div className="mb-3 ">
          <div className="form-label  text-align">Input Record Code</div>
          <input
            ref={inputRef}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          className="btn btn-grad mb-3"
          type="button"
          onClick={onClickHandle}
        >
          Submit
        </button>
        <button className="btn btn-grad2 mb-3" type="button" onClick={()=> navigate('/input')}>
          Go Create Record
        </button>
        <a href="/gif" className="mx-auto text-color">
          I am feeling lucky today - Get a random Gif{" "}
        </a>
      </div>
    </div>
  );
};

export default Main;
