import React, {useState, useRef, useEffect} from 'react'
import SignupStyle from '../../auth/signup/Signup.module.css'
import SecondSolarImage from '../../images/heroImages/SecondSolarImage.jpg'

const Signup = () => {
  // const [errorMessage, setErrorMessage] = useRef()

  return (
      <div className={SignupStyle.SignupContainer}>
      <div className={SignupStyle.SignupRightSide}>
        <div className={SignupStyle.SignupRightSideContent}>
          <img className={SignupStyle.SignupImage} src={SecondSolarImage} alt="Background" />
        </div>
      </div>

      <div className={SignupStyle.SignupLeftSide}>
        <div className={SignupStyle.SignupContent}>
            
      <div className={SignupStyle.SignupText}>
        <p   className={SignupStyle.errorMessage ? "errorMessage": "offscreen"} aria-live='assertive'>
          {/* {errorMessage} */}
        </p>
        
      {/* <h1>{`Signup to find clients that needs your service`}</h1> */}
      <p>{`Signup to find clients that needs your service`}</p>
      </div>

  <form id={SignupStyle.formFilling} >
    <div className={SignupStyle.SignupForms}>
      <label htmlFor='firstName' ></label>
    <input type="text"
    id='firstName'
      placeholder="First Name"
      // onChange={""}`
      />
    </div>
    <div className={SignupStyle.SignupForms}>
      <label htmlFor='lastName' ></label>
      <input type="text"
      id='lastName'
        placeholder="Last Name" 
        // onChange={""}
        />
    </div>
    <div className={SignupStyle.SignupForms}>
      <label htmlFor='email'></label>
      <input type="email" 
      id='email' 
      placeholder="example@gmail.com"
      //  ref={userRef}
      // autoComplete='off'
      required
      //  onChange={""}
        />
    </div>

    <div className={SignupStyle.SignupForms}>
      <label htmlFor='password'></label>
      <input type="password" 
      id='password' 
      placeholder="Password"
      required
      />
    
    </div>

    <button className={SignupStyle.Button} type="submit">
      <a href='/congratulations'>Signup</a> 
    </button>
  </form>
      </div>
      </div>

  </div>
  )
}

export default Signup
