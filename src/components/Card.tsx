import React from "react";
import "../styles/Home.scss";
import { useState, useEffect } from "react";

const Card: React.FC = () => {
  const [images, setImages] = useState([] as any);
  const [imageURLS, setImageURLs] = useState([]);

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
          placeholder="Your Name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label fs-1 fw-bold" htmlFor="date">
          Ngày sinh đê
        </label>
        <input type="date" className="form-control" id="date" />
      </div>
      <div className="mb-4">
        <label className="form-label fs-1 fw-bold" htmlFor="message">
          Lời nhắn đê
        </label>
        <textarea
          className="form-control"
          rows={3}
          id="message"
          placeholder="Nhắn cái gì cho bản thân xem..."
        />
      </div>
      <div className="mb-3">
        <p className="text-center fs-1 fw-bold customtext">Chọn ra tấm ảnh nào yêu thích đê</p>
        <div className=" d-flex justify-content-center">
          <input
            id="image"
            type="file"
            multiple
            accept="image/*"
            onChange={onImageChange}
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
        <button className="btn  btn-primary custombutton" type="submit">
          Gửi SMS
        </button>
      </div>
    </div>
  );
};

export default Card;
