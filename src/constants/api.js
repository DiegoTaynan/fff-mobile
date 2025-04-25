import axios from "axios";

const api = axios.create({
  baseURL: "http://18.118.227.83:3001", // Atualizado para o endereço público da AWS EC
});

export default api;
