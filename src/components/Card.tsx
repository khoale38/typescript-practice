import React from "react";
import "../styles/Home.scss";
import { useState, useEffect } from "react";
import Profile from "../models/Profile";
import moment from "moment";
const Card: React.FC = () => {
  const [images, setImages] = useState([] as any);
  const [imageURLS, setImageURLs] = useState([]);
  const [form, setForm] = useState<Profile>({
    name: "",
    date: "", //moment(Date.now()).format('YYYY-MM-DD');
    message: "",
    image: "",
  });

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: any = [];
    images.forEach((image: any) =>
      newImageUrls.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e: any) {
    setImages([...e.target.files]);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLElement>) => {
    setForm({
      ...form,
      [(event.target as HTMLInputElement).name]: [(event.target as HTMLInputElement).value],
    });
  };

  const showState = () => {
    console.log(form);
  };

  return (
    <div className=" card bg-white px-5 py-5 mb-4 mx-4 pinktext">
      <div className="mb-3">
        <label className="form-label fs-1 fw-bold" htmlFor="name">
          Tên đê
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
        <label className="form-label fs-1 fw-bold" htmlFor="date">
          Ngày sinh đê
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div className="mb-4">
        <label className="form-label fs-1 fw-bold" htmlFor="message">
          Lời nhắn đê
        </label>
        <textarea
          className="form-control"
          rows={3}
          id="message"
          name="message"
          onChange={(e) => {
            changeHandler(e);
          }}
          placeholder="Nhắn cái gì cho bản thân xem..."
        />
      </div>
      <div className="mb-3">
        <p className="text-center fs-1 fw-bold customtext">
          Chọn ra tấm ảnh nào yêu thích đê
        </p>
        <div className=" d-flex justify-content-center">
          <input
            id="image"
            name='image'
            type="file"
            accept="image/*"
            onChange={(e) => {
              onImageChange(e);
              changeHandler(e);
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
          className="btn  btn-primary custombutton"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            showState();
          }}
        >
          Gửi SMS
        </button>
      </div>
    </div>
  );
};

export default Card;
