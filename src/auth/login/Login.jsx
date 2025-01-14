import React, {useState} from 'react'
import LoginStyle from "../../auth/login/Login.module.css"
import { Link, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate } from "react-router-dom";
const Login = () => { 
  const storedId = localStorage.getItem("id")
  const [loginFormData, setLoginFormData] = useState({
    technicianId: storedId,
    email: '',
    password: '',
  });
  
  console.log(storedId)
  const location = useLocation();
 const navigate = useNavigate();

 const handleLoginFormData=(event)=>{
   setLoginFormData({...loginFormData,[event.target.name]:event.target.value})
 
 }

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/login-technician", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });

      if (response.ok) {
        const data = await response.json(); // Ensure this matches your backend's response structure
        console.log("Login Response Data:", data); // Debugging

        // Save the user ID to localStorage
        localStorage.setItem("userId", JSON.stringify(data.id));
       toast.success('Logged In successfully', {
                onClose: () => navigate("/technicianDashboard"), // Navigate after toast closes
                autoClose: 2000, // 3-second delay for the toast
              });
      
      } else {      
        // Handle invalid credentials
        const errorData = await response.json();
        console.error("Error Response:", errorData); // Debugging
        toast.error(errorData.message || "Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error); // Debugging
      toast.error("An error occurred. Please try again later.");
    }
  };
   return (
    <div className={LoginStyle.logincontainer}>
      <div className={LoginStyle.loginleft}>
        <div className={LoginStyle.logo}>
        <p className={LoginStyle.logoSpan}>Sol
          <span>
          con
          </span>
        </p>
        </div>
       <div className={LoginStyle.loginLeftSideContent}>
       <h1 className={LoginStyle.leftSideTextHeader}> Welcome back!</h1>
        <p className={LoginStyle.leftSideParagraph}>A report on your activities on Solcon in 2025.</p>
        <button className={LoginStyle.leftSideButton}>SHOW ME MY ACTIVITIES MOVES →</button>
       </div>
      </div>
      <div className={LoginStyle.loginright}>
        <div className={LoginStyle.loginRightSideContent}>
        <h2 className={LoginStyle.loginHeaderText}>Welcome back</h2>
        <h2 className={LoginStyle.loginRightParagraphTextOne}>Sign in to continue</h2>
        <form onSubmit={handleLoginFormSubmit} className={LoginStyle.formgroup}>
          <div className={LoginStyle.loginform}>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              // value={loginFormData}
              onChange={handleLoginFormData}
              required
            />
          </div>
          <div className={LoginStyle.loginform}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              // value={loginFormData}
              onChange={handleLoginFormData}
              required
            />
          </div>
         <div>
         <p className={LoginStyle.forgotpassword}>Forgot password?</p>
         <button  type="submit" onClick={handleLoginFormSubmit} className={LoginStyle.Button}>Login</button>
         </div>
        </form>
        <p className={LoginStyle.signupprompt}>
          Don't have an account? <Link to="/join">Sign up</Link>
        </p>

        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login
