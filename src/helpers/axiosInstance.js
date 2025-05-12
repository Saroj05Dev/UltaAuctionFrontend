import axios from "axios";

const axiosInstance = axios.create(); // creates a new instance of axios

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL; // set the base URL

axiosInstance.defaults.withCredentials = true; // Allow cookies to be sent with requests

export default axiosInstance;