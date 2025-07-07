import React, { useState } from "react";
import { toast } from "react-toastify";
import SignupPresentation from "./SignupPresentation";
import { useDispatch } from "react-redux";
import { createAccount, login } from "../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../helpers/axiosInstance";
// Container for the signup page
function Signup() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);

  const [signUpState, setSignUpState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const sendOtpHandler = async () => {
    try {
      console.log("Sending OTP to:", signUpState.mobileNumber);
      const res = await axiosInstance.post("/otp/send", {
        phone: signUpState.mobileNumber,
      });
      setIsOTPSent(true);
      toast.success("OTP sent!");
    } catch (err) {
      console.error(err); // helpful for debugging
      toast.error(err.response?.data?.message || "Failed to send OTP");
    }
  };

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignUpState({
      ...signUpState,
      [name]: value,
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (loading) return;

    //start loading
    setLoading(true);

    // Add validations for the form input
    if (
      !signUpState.email ||
      !signUpState.mobileNumber ||
      !signUpState.password ||
      !signUpState.firstName
    ) {
      toast.error("Missing values from the form");
      return setLoading(false);
    }

    if (signUpState.firstName.length < 3 || signUpState.firstName.length > 15) {
      toast.error(
        "First name should be atleast 3 characters long and maximum 15 characters long"
      );
      return setLoading(false);
    }
    // check email
    if (!signUpState.email.includes("@") || !signUpState.email.includes(".")) {
      toast.error("Please fill a valid email");
      return setLoading(false);
    }

    // check mobile number
    if (
      signUpState.mobileNumber.length < 10 ||
      signUpState.mobileNumber.length > 12
    ) {
      toast.error("Mobile number should be between 10-12 digits long");
      return setLoading(false);
    }

    // check password validation
    if (signUpState.password.length < 8) {
      toast.error(
        "Password should be atleast 8 characters long, it should contain atleast 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
      );
      return setLoading(false);
    }
    // check otp validation

    // Step 1: Verify OTP
    const verifyRes = await axiosInstance.post("/otp/verify-otp", {
      phone: signUpState.mobileNumber,
      otp: otp,
    });

    if (!verifyRes.data.success) {
      toast.error("Invalid or expired OTP");
      return setLoading(false);
    }

    // Step 2: Create Account
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
  }

  return (
    <SignupPresentation
      handleFormSubmit={handleFormSubmit}
      handleUserInput={handleUserInput}
      sendOtpHandler={sendOtpHandler}
      otp={otp}
      setOtp={setOtp}
      isOTPSent={isOTPSent}
      loading={loading}
    />
  );
}

export default Signup;
