import axios from "axios";

export default axios.create({
  baseURL: "https://be-messagerecord.herokuapp.com/",
  headers: {
    'Content-Type':  "multipart/form-data"
  }
});