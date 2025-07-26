import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createAccount, login } from "../../../redux/slices/AuthSlice";
import axiosInstance from "../../../helpers/axiosInstance";
import { validateSignupForm } from "../validation/signupValidation";

export const useSignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [signUpState, setSignUpState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setSignUpState((prev) => ({ ...prev, [name]: value }));
  };

  const sendOtpHandler = async () => {
    try {
      await axiosInstance.post("/otp/send", {
        phone: signUpState.mobileNumber,
      });
      setIsOTPSent(true);
      toast.success("OTP sent!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const error = validateSignupForm(signUpState, otp);
    if (error) {
      toast.error(error);
      return setLoading(false);
    }

    // Verify OTP
    try {
      const verifyRes = await axiosInstance.post("/otp/verify-otp", {
        phone: signUpState.mobileNumber,
        otp,
      });

      if (!verifyRes.data.success) {
        toast.error("Invalid or expired OTP");
        return setLoading(false);
      }
    } catch (err) {
      console.error(err);
      toast.error("OTP verification failed");
      return setLoading(false);
    }

    // Create account
    const apiResponse = await dispatch(createAccount(signUpState));
    if (apiResponse?.payload?.data?.success) {
      const loginResponse = await dispatch(
        login({
          email: signUpState.email,
          password: signUpState.password,
        })
      );
      if (loginResponse?.payload?.data?.success) {
        navigate("/");
      }
    } else {
      toast.error(apiResponse?.payload?.data?.message || "Signup failed");
    }

    setLoading(false);
  };

  return {
    otp,
    setOtp,
    isOTPSent,
    sendOtpHandler,
    handleFormSubmit,
    handleUserInput,
    loading,
  };
};
