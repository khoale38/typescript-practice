import { useParams } from "react-router-dom";
import http from "../http-common";
import Profile from "../models/Profile";

class ProfileService {
  create = async (data: Profile) => {
    let params = new FormData();
    params.append("date", data.date || "");
    params.append("name", data.name || "");
    params.append("phone", data.phone || "");
    params.append("mail", data.mail || "");
    params.append("message", data.message || "");
    params.append("image", data.image || "");

    console.log("params", params);

    return await http
      .post("/image", params)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  async find(id: string): Promise<Profile> {
    let temp! :Profile
    await http
      .get(`${id}`)
      .then(function (response) {
    
         temp=response.data[0] as Profile
      })
      .catch(function (error) {
        console.log(error);
      });
      return temp;
  }
}
export default new ProfileService();
