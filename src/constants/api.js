import axios from "axios";

const api = axios.create({
  baseURL: "http://10.62.17.9:3001",
});

export default api;
