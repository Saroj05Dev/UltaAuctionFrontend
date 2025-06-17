import axios from "axios";
import { logout } from "../redux/slices/AuthSlice";
import { toast } from "react-toastify";

const axiosInstance = axios.create(); // creates a new instance of axios

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL; // set the base URL

axiosInstance.defaults.withCredentials = true; // Allow cookies to be sent with requests

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Dynamically import store to avoid circular dependency
      import("../redux/store").then((module) => {
        const store = module.store;
        store.dispatch(logout());
        localStorage.clear();
        toast.info("Session expired. Please login again.");
        setTimeout(() => {
        window.location.reload(); // 🔁 Reload page
      }, 1500);
      return Promise.reject(error);
      });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;