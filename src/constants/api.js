import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-18-118-227-83.us-east-2.compute.amazonaws.com:3001", // Usando HTTP
});

// Interceptores para debugging
api.interceptors.request.use((config) => {
  console.log("Iniciando requisição:", config);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("Resposta recebida:", response);
    return response;
  },
  (error) => {
    console.error("Erro na resposta:", error);
    return Promise.reject(error);
  }
);

export default api;
