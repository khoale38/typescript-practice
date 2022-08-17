import http from "../http-common";
import Profile from "../models/Profile";

class ProfileService {
  create = async (data: Profile) => {
    
    return await http
      .post<Profile>("/image", {
        name: data.name,
        date:data.date,
        phone: data.phone,
        message: data.message,
        mail: data.mail,
        image:data.image
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
export default new ProfileService();
