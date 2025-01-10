import React, {useState} from 'react'
import LoginStyle from "../../auth/login/Login.module.css"
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
           }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("userId", JSON.stringify(data.id)); // Save user ID to localStorage
        toast.success("Login successful", {
          onClose: () => navigate("/dashboard"), // Redirect to dashboard after the toast
          autoClose: 3000,
        });
      } else {
        toast.error("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };
   return (
    <div className={LoginStyle.loginContainer}>
      <h4 className={LoginStyle.backToHomePage}><Link to={'/'}>back</Link></h4>
      <div className={LoginStyle.loginContent}>
      <div className={LoginStyle.welcomeMessage}>
       <h2> Welcome back!</h2>
      </div>
      
      <form onChange={handleLoginFormSubmit} id={LoginStyle.loginForm}>
        <div className={LoginStyle.inputContainer}>
        <label className='inputLabel' htmlFor='email'>Email</label>
        <input type='email' 
         placeholder=''
         name='email'
         value={email}
         onChange={handlePasswordChange}
         required
         />
        </div>

        <div>
        <label style={{fontWeight:"bold"}}  className='inputLabel' htmlFor='password'>Password</label>
        <input type='password' 
         placeholder='password'
         name='password'
         onChange={handleEmailChange}
         value={password}
         required
         />
        </div>
      </form>
     <div className={LoginStyle.buttonContainer}>
     <button onChange={handleLoginFormSubmit} className={LoginStyle.loginButton}><a href='/login'>Login</a></button>
     </div>
     <h4 className={LoginStyle.option}> Don't have an account?
      <a href='/join'>Join</a>
      </h4>
      </div>
     
    </div>
  )
}

export default Login
