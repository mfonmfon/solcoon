import React from 'react'
import LoginStyle from "../../auth/login/Login.module.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className={LoginStyle.loginContainer}>
      <h4 className={LoginStyle.backToHomePage}><Link to={'/'}>back</Link></h4>
      <div className={LoginStyle.loginContent}>
      <div className={LoginStyle.welcomeMessage}>
       <h2> Welcome back!</h2>
      </div>
      
      <form id={LoginStyle.loginForm}>
        <div className={LoginStyle.inputContainer}>
        <label className='inputLabel' htmlFor='email'>Email</label>
        <input type='email' 
         placeholder=''
         name='email'
         required
         />
        </div>

        <div>
        <label style={{fontWeight:"bold"}}  className='inputLabel' htmlFor='password'>Password</label>
        <input type='password' 
         placeholder='password'
         name='password'
         required
         />
        </div>
      </form>
     <div className={LoginStyle.buttonContainer}>
     <button className={LoginStyle.loginButton}><a href='/login'>Login</a></button>
     </div>
     <h4 className={LoginStyle.option}> Don't have an account?
      <a href='/join'>Join</a>
      </h4>
      </div>
     
    </div>
  )
}

export default Login
