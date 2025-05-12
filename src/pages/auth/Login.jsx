import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../../redux/Slices/AuthSlice';
import LoginPresentation from './LoginPresentation';
import { useNavigate } from 'react-router-dom';

function Login() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    function handleUserInput(e) {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    async function handleFormSubmit(e) {
            e.preventDefault(); // 🔒 Prevent full-page reload
            console.log(loginData)
    
            // Add validations for the form input
            if(!loginData.email || !loginData.password) {
                toast.error("Missing values from the form");
            }
    
            // check email
            if(!loginData.email.includes('@' || !loginData.email.includes('.'))) {
                toast.error("Please fill a valid email")
            }
    
            const apiResponse = await dispatch(login(loginData));
            console.log("api response: ", apiResponse)
            if(apiResponse.payload.data.success) {
                navigate('/')
            }
        }

  return (
    <LoginPresentation handleFormSubmit={handleFormSubmit} handleUserInput={handleUserInput} />
  )
}

export default Login
