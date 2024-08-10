import axios from "axios";
import * as AxiosLogger from "axios-logger";

export const API_KEY = "14c0e53c69e0249fe16a7d315152a932";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(AxiosLogger.requestLogger);

export default api;
