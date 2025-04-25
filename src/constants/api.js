import axios from "axios";

const api = axios.create({
  baseURL: "http://18.118.227.83:3001", // Atualizado para o endereço público da AWS EC
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
