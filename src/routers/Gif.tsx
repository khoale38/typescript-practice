import React, { useEffect, useState } from "react";
import ProfileService from "../service/ProfileService";
import "../styles/Gif.scss";
import Card from "../components/placeholderCard";
import { AxiosResponse } from "axios";
var giphy = require("giphy-api")("LuK13keeucvx3ZeicP3o1Ll8gWIp0NWI");
const Temp: React.FC = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const [gif, setGif] = useState("");

  useEffect(() => {
    const fetchGif = async () => {
      await giphy.random({ limit: 1, rating: "g", fmt: "json" }, function (
        err: Error,
        res: AxiosResponse
      ) {
        console.log(res);
        console.log(res.data.images.original.url);
        setGif(res.data.images.original.url);
        setImgsLoaded(true);
      });
    };
    fetchGif();
  }, []);

  return (
    <div >
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 
      {gif != "" && imgsLoaded ? (
        <img src={gif} className="customgif" />
      ) : (
        <div className="black-background ">
          <h1 className="centered">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Temp;
