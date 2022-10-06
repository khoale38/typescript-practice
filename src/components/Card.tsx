import React from "react";
import "../styles/Input.scss";
import { useState, useEffect } from "react";
import Profile from "../models/Profile";
import moment from "moment";
import ProfileService from "../service/ProfileService";
import emailjs from "@emailjs/browser";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card: React.FC = () => {
  const [images, setImages] = useState([] as any);
  const [imageURLS, setImageURLs] = useState([]);
  const [defaultDate, setdefaultDate] = useState(
    moment(Date.now()).format("YYYY-MM-DD")
  );
  const [btnDisable, setbtnDisalbe] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState<Profile>({
    name: "",
    mail: "",
    phone: "",
    date: defaultDate, //moment(Date.now()).format('YYYY-MM-DD')
    message: "",
    image: "",
    id: uuidv4(),
  });

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: any = [];
    images.forEach((image: any) =>
      newImageUrls.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageUrls);
    toDataUrl(newImageUrls, function (myBase64: any) {
      setForm({ ...form, image: myBase64 }); // myBase64 is the base64 string
    });
  }, [images]);

  function onImageChange(e: any) {
    setImages([...e.target.files]);
  }

  const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

  async function onSubmit() {
    console.log(form);
    if (
      form.name == "" ||
      form.date == "" ||
      form.mail == "" ||
      form.message == "" ||
      form.phone == ""
    ) {
      toast.error("Create record fail, please full fill information", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      ProfileService.create(form);
      submitEmail();
      toast.info("Create record success, check your email for record code", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setbtnDisalbe(!btnDisable);
      await delay(2000);

      navigate("/");
      setbtnDisalbe(!btnDisable);
    }
  }

  function submitEmail() {
    var templateParams = {
      to_name: form.name,
      message: form.id,
      to_name:form.mail
    };
    emailjs.init("4sXJxHrh5e3-NMGIn");
    emailjs.send("service_t70vk55", "template_ujphn5r", templateParams).then(
      function (response: any) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error: any) {
        console.log("FAILED...", error);
      }
    );
  }

  const changeHandler = (event: React.ChangeEvent<HTMLElement>) => {
    setForm({
      ...form,
      [(event.target as HTMLInputElement)
        .name]: (event.target as HTMLInputElement).value,
    });
  };

  function toDataUrl(url: any, callback: Function) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }

  return (
    <div className=" card bg-white px-5 py-5 mb-4 mx-4 pinktext">
      <ToastContainer />
      <div className="mb-3">
        <label className="form-label fs-1 fw-bold font-text" htmlFor="name">
          Your name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Your Name"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label fs-1 fw-bold font-text" htmlFor="date">
          Date of message
        </label>
        <input
          type="date"
          className="form-control"
          defaultValue={defaultDate}
          id="date"
          name="date"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label fs-1 fw-bold font-text" htmlFor="mail">
          Your Email
        </label>
        <input
          type="mail"
          className="form-control"
          id="mail"
          name="mail"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label fs-1 fw-bold font-text" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="phone"
          className="form-control"
          id="phone"
          name="phone"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div className="mb-4">
        <label className="form-label fs-1 fw-bold font-text" htmlFor="message">
          Your Message
        </label>
        <input
          className="form-control"
          id="message"
          name="message"
          onChange={(e) => {
            changeHandler(e);
          }}
          placeholder="Message that you want to record"
        />
      </div>
      <div className="mb-3">
        <p className="text-center fs-1 fw-bold customtext font-text">
          Any picture (just in case)
        </p>
        <div className=" d-flex justify-content-center">
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              onImageChange(e);
            }}
          />
        </div>

        <div className="mb-3 customgrid ">
          {imageURLS.map((imageSrc) => (
            <img
              className="customimage my-3"
              src={imageSrc}
              alt="not found"
              width={"250px"}
              height={"250px"}
            />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          disabled={btnDisable}
          className="btn font-text btn-lg  custombutton  "
          type="submit"
          onClick={(e) => {
            onSubmit();
          }}
        >
          {!btnDisable ? "Save Record" : "Loading..."}
        </button>
      </div>
    </div>
  );
};

export default Card;
