import axios from "axios";
import { LoadUsuario } from "../storage/storage.usuario.js";

const api = axios.create({
  baseURL: "https://familyfriendsadmin.com:3002",
});

api.interceptors.request.use(async (config) => {
  const user = await LoadUsuario();
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default api;
