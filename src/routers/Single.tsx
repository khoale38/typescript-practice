import React, { useEffect } from "react";
import ProfileService from "../service/ProfileService";
import "../styles/single.scss";
import Card from "../components/placeholderCard";

const Temp: React.FC = () => {
  useEffect(() => {
    ProfileService.find("dfa1e225-3251-4266-871e-2350d86c97be");
  }, []);

  return (
    <div className="singlebackground ">
      <Card></Card>
    </div>
  );
};

export default Temp;
