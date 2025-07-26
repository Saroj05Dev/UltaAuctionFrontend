import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../../redux/slices/AuthSlice";
import { validateLogin } from "../validation/loginValidation";

export const useLoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    mobileNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const error = validateLogin(loginData);
    if (error) {
      toast.error(error);
      return setLoading(false);
    }

    const { email, password, mobileNumber } = loginData;
    const payload = {
      password,
      ...(email ? { email } : {}),
      ...(mobileNumber ? { mobileNumber } : {}),
    };

    const res = await dispatch(login(payload));
    const { success, data } = res?.payload?.data || {};
    const errorMessage = res?.payload?.response?.data?.message;

    if (!success && errorMessage) {
      toast.error(errorMessage);
      return setLoading(false);
    }

    if (success) {
      navigate(data.userRole === "ADMIN" ? "/admin/dashboard" : "/");
    }

    setLoading(false);
  };

  return {
    loginData,
    loading,
    handleUserInput,
    handleFormSubmit,
  };
};
