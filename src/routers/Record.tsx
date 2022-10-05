import React from "react";
import "../styles/Record.scss";
import ProfileService from "../service/ProfileService";
import { useState, useEffect } from "react";
import Profile from "../models/Profile";
const Record = () => {
  const [form, setForm] = useState<Profile>({
    name: "",
    mail: "",
    phone: "",
    date: "", //moment(Date.now()).format('YYYY-MM-DD')
    message: "",
    image: "",
  });
  async function axiosTest() {
    // create a promise for the axios request
    const promise = ProfileService.find("19330049-f0ee-4ade-8bfa-038c71906830");
    // using .then, create a new promise which extracts the data
    const dataPromise = await promise.then((response) => response);
    setForm(dataPromise);
  }
  useEffect(() => {
    axiosTest();
  }, []);

  return (
    <div className="Record-bg d-flex">
      <div className="card record-card custom-card  mx-auto">
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
            <img className="mt-3 " src={form.image!} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Record;
