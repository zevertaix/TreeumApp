import axios from "axios";

export const API_KEY = "14c0e53c69e0249fe16a7d315152a932";
const API_URL = "https://ws.audioscrobbler.com/2.0/?method=";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
