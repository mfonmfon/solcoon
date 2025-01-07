import React, {useState, useRef, useEffect} from 'react'
import ClientSignupStyle from '../../auth/signup/ClientSignup.module.css'
import SecondSolarImage from '../../images/heroImages/SecondSolarImage.jpg'

const Signup = () => {
  // const [errorMessage, setErrorMessage] = useRef()
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[country, setCountry] = useState("");

  const handleFirstName = (event) =>{
    setFirstName(event.target.value);
  }
  const handleLastName = (event)=>{
    setLastName(event.target.value)
  }
  const handleEmail = (event)=>{
    setEmail(event.target.value)
  }
  const handlePassword = (event)=>{
    setPassword(event.target.value)
  }
  const handleCountry =(event)=>{
   setCountry(event.target.value)
  }
  const handleFormSubmit = async (event)=>{
    event.preventDefault()
    try{
      const responseData = await fetch('',
        {
          method: "POST",
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            firstName,
            lastName,
            email,
            password

          ),
        });
        if(!responseData.ok)throw new Error(`ERROR:${responseData.statusText}`);
         console.log("Error here check am again");
          const result = await responseData.json();
          alert(`Success ${result.statusText}`)
        
    }catch(error){
      console.error(`Error creating this user`)
  }
  }
  return (
      <div className={ClientSignupStyle.SignupContainer}>
      <div className={ClientSignupStyle.SignupRightSide}>
        <div className={ClientSignupStyle.SignupRightSideContent}>
          <img className={ClientSignupStyle.SignupImage} src={SecondSolarImage} alt="Background" />
        </div>
      </div>

      <div className={ClientSignupStyle.SignupLeftSide}>
        <div className={ClientSignupStyle.SignupContent}>
            
      <div className={ClientSignupStyle.SignupText}>
        <p  className={ClientSignupStyle.errorMessage ? "errorMessage": "offscreen"} aria-live='assertive'>
        </p>
      <p>{`Signup to find clients that needs your service`}</p>
      </div>

  <form onChange={handleFormSubmit} id={ClientSignupStyle.formFilling} >
    <div className={ClientSignupStyle.SignupForms}>
      <label htmlFor='firstName' ></label>
    <input type="text"
       placeholder="First Name"
       name='firstNamae'
       onChange={handleFirstName}
       required
      />
    </div>
    <div className={ClientSignupStyle.SignupForms}>
      <label htmlFor='lastName' ></label>
      <input type="text"
      name='lastNamae'
      placeholder="Last Name" 
      onChange={handleLastName}
      required
        />
    </div>
    <div className={ClientSignupStyle.SignupForms}>
      <label htmlFor='email'></label>
      <input 
      type="email" 
      name='email' 
      placeholder="example@gmail.com"
      onChange={handleEmail}
      required
        />
    </div>

    <div className={ClientSignupStyle.SignupForms}>
      <label htmlFor='password'></label>
      <input
      type="password" 
      name='password' 
      placeholder="Password"
      onChange={handlePassword}
      required
      />
    
    </div>

    <button  onChange={handleFormSubmit} className={ClientSignupStyle.Button} type="submit">
      <a href='/technicianDashboard'>Signup</a> 
    </button>
  </form>
      </div>
      </div>

  </div>
  )
}

export default Signup
