import React from 'react'
import LoginStyle from "../../auth/login/Login.module.css"

const Login = () => {
  return (
    <div className={LoginStyle.loginContainer}>
      <h4>back</h4>
      <div className={LoginStyle.loginContent}>

      <div className={LoginStyle.welcomeMessage}>
       <h2> Welcome back!</h2>
      </div>
      
      <form id={LoginStyle.loginForm}>
        <div>
        <label htmlFor='email'>email</label>
        <input type='email' 
        placeholder='example@gmail.com'
         name='email'
         required
         />
        </div>

        <div>
        <label htmlFor='password'>password</label>
        <input type='password' 
        placeholder='password'
         name='password'
         required
         />
        </div>

      </form>
      </div>
    </div>
  )
}

export default Login
