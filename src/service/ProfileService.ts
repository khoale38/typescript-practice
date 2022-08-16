import http from "../http-common";
import Profile from "../models/Profile";

class ProfileService {
  create(data: Profile) {
    return http
      .post<Profile>("/image", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
export default new ProfileService();
