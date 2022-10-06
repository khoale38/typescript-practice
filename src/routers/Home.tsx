import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.scss";
import { useRef, useState } from "react";
import ProfileService from "../service/ProfileService";
import Profile from "../models/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  async function onClickHandle(e: any) {
    await axiosTest();
    console.log(form)
    if (inputRef.current!.value == "") {
      toast.error("Please full fill your Record code", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (form === undefined) {
      toast.error("Record code is invalid", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
      navigate("/record", {
        state: {
          date: form.date,
          message: form.message,
          name: form.name,
          image: form.image,
        },
      });
    }
  }

  return (
    <div className="Home-bg d-flex">
      <ToastContainer />
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
        <button
          className="btn btn-grad2 mb-3"
          type="button"
          onClick={() => navigate("/input")}
        >
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
