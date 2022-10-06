import React, { useEffect, useState } from "react";
import ProfileService from "../service/ProfileService";
import "../styles/Gif.scss";
import Card from "../components/placeholderCard";
import { AxiosResponse } from "axios";
import { GiphyFetch } from "@giphy/js-fetch-api";

const Temp: React.FC = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const [gif, setGif] = useState<any>();

  useEffect(() => {
    const fetchGif = async () => {
      const gf = new GiphyFetch("LuK13keeucvx3ZeicP3o1Ll8gWIp0NWI");
      const data = await gf.random({ limit: 1 });
      console.log(data)
      setGif(data.data.images.original.url);
      setImgsLoaded(true);
    };
    fetchGif()
  }, []);

  return (
    <div>
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
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
