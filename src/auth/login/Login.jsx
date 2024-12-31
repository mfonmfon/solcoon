import React, {useState} from 'react'
import LoginStyle from "../../auth/login/Login.module.css"
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("")

  const handleEmailSubmit = (event)=>{
    event.preventDefault()
  }
  const handlePasswordSubmit=(event)=>{
    event.preventDefault()
  }

  const handleLoginFormSubmit = async(event)=>{
    event.preventDefault()

    try{
      const responseLoginFormData = await fetch('',{
        method:'POST',
        header:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(
          email,
          password,
        )
      });
      if(!responseLoginFormData.ok)throw new Error("Error")
        const result = await responseLoginFormData.json()
      alert("Success", result)
    }catch(error){
      console.error("error")
    }
  }
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
         onChange={handleEmailSubmit}
         required
         />
        </div>

        <div>
        <label style={{fontWeight:"bold"}}  className='inputLabel' htmlFor='password'>Password</label>
        <input type='password' 
         placeholder='password'
         name='password'
         onChange={handlePasswordSubmit}
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
