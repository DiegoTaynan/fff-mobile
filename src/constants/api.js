import axios from "axios";

const api = axios.create({
  baseURL: "https://familyfriendsadmin.com:3002", // Usando HTTP
});

console.log("API carregada com sucesso");
export default api;
