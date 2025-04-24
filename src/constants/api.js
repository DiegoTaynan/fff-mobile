import axios from "axios";

const api = axios.create({
  //baseURL: "http://ec2-18-118-227-83.us-east-2.compute.amazonaws.com:3001", // Atualizado para o endereço público da AWS EC
  baseURL: "http://10.62.17.9:3001",
});

export default api;
