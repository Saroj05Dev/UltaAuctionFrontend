import React, { useState } from "react";
import { toast } from "react-toastify";
import SignupPresentation from "./SignupPresentation";
import { useDispatch } from "react-redux";
import { createAccount, login } from "../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { FaLandMineOn } from "react-icons/fa6";
// Container for the signup page
function Signup() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [signUpState, setSignUpState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

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
    }
    setLoading(false);
  }

  return (
    <SignupPresentation
      handleFormSubmit={handleFormSubmit}
      handleUserInput={handleUserInput}
      loading={loading}
    />
  );
}

export default Signup;
