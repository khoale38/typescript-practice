import React from "react";
import "../styles/Record.scss";
import ProfileService from "../service/ProfileService";
import { useState, useEffect } from "react";
import Profile from "../models/Profile";
import { useLocation } from "react-router-dom";
const Record = () => {
  let form: any;
  const params = useLocation();
  form = params.state;
  return (
    <div className="Record-bg d-flex">
      <div className="card record-card custom-card min-card-size mx-auto">
        <div className="mb-3">
          <span className="record-text message-text">
            On <b className="yellow-voyage">{form.date?.slice(0, 10)} </b>,{" "}
            <b className="yellow-voyage">{form.name}</b> send this message :
            <div className="mt-3  yellow-voyage">
              "<b className="message-text">{form.message}</b>"
            </div>
          </span>
        </div>
        {form.image != "" ? (
          <div className="record-text ">
            And you choose this image for this occasion :
            <img className="mt-3 ctm-img" src={form.image!} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Record;
