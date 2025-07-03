import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../../redux/slices/AuthSlice";
import LoginPresentation from "./LoginPresentation";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    mobileNumber: "",
  });

  const [loading, setLoading] = useState(false);

  function handleUserInput(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const { email, password, mobileNumber } = loginData;

    if (!password) {
      toast.error("Password is required.");
      return setLoading(false);
    }

    if (!email && !mobileNumber) {
      toast.error("Please enter either Email or Mobile Number.");
      return setLoading(false);
    }

    // Validate email if it's filled
    if (email && (!email.includes("@") || !email.includes("."))) {
      toast.error("Invalid email address.");
      return setLoading(false);
    }

    // Validate mobile if it's filled
    if (
      mobileNumber &&
      (mobileNumber.length < 10 || mobileNumber.length > 13)
    ) {
      toast.error("Invalid phone number.");
      return setLoading(false);
    }

    // Only send the relevant field
    const payload = {
      password,
      ...(email ? { email } : {}),
      ...(mobileNumber ? { mobileNumber } : {}),
    };

    const apiResponse = await dispatch(login(payload));

    const errorMessage = apiResponse?.payload?.response?.data?.message;

    if (!apiResponse?.payload?.data?.success && errorMessage) {
      toast.error(errorMessage);
      return setLoading(false);
    }

    const isSuccess = apiResponse?.payload?.data?.success;
    const userRole = apiResponse?.payload?.data?.data?.userRole;

    if (isSuccess) {
      if (userRole === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    }

    setLoading(false);
  }

  return (
    <LoginPresentation
      handleFormSubmit={handleFormSubmit}
      handleUserInput={handleUserInput}
      loading={loading}
    />
  );
}

export default Login;
