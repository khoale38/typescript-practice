import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    'Content-Type':  "multipart/form-data"
  }
});