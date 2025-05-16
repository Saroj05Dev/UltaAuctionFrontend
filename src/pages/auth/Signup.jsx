import React, { useState } from 'react'
import { toast } from 'react-toastify';
import SignupPresentation from './SignupPresentation';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../redux/slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
// Container for the signup page
function Signup() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [signUpState, setSignUpState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: ''
    });

    function handleUserInput(e) {
        const {name, value} = e.target;
        setSignUpState({
            ...signUpState,
            [name]: value
        })
    }

    async function handleFormSubmit(e) {
        e.preventDefault(); // 🔒 Prevent full-page reload
        console.log(signUpState)

        // Add validations for the form input
        if(!signUpState.email || !signUpState.mobileNumber || !signUpState.password || !signUpState.firstName) {
            toast.error("Missing values from the form");
        }

        if(signUpState.firstName.length < 3 || signUpState.firstName.length > 15) {
            toast.error("First name should be atleast 3 characters long and maximum 15 characters long")
        }
        // check email
        if(!signUpState.email.includes('@' || !signUpState.email.includes('.'))) {
            toast.error("Please fill a valid email")
        }

        // check mobile number
        if(signUpState.mobileNumber.length < 10 || signUpState.mobileNumber.length > 12) {
            toast.error("Mobile number should be between 10-12 digits long")
        }

        // check password validation 
        if(signUpState.password.length < 8) {
            toast.error("Password should be atleast 8 characters long, it should contain atleast 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character")
        }

        const apiResponse = await dispatch(createAccount(signUpState));
        if(apiResponse.payload.data.success) {
            navigate('/login');
        }
    }

  return (
    <SignupPresentation 
    handleFormSubmit={handleFormSubmit} 
    handleUserInput={handleUserInput}
    />
  )
}

export default Signup
