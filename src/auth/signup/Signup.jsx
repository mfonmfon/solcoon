import React, {useState, useRef, useEffect} from 'react'
import SignupStyle from '../../auth/signup/Signup.module.css'
import SecondSolarImage from '../../images/heroImages/SecondSolarImage.jpg'

const Signup = () => {
  // const [errorMessage, setErrorMessage] = useRef()
  const[firstName, setFirstsName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[country, setCountry] = useState("");

  const handleFirstName = (event) =>{
    event.preventDefault()
  }
  const handleLastName = (event)=>{
    event.preventDefault()
  }
  const handleEmail = (event)=>{
    event.preventDefault()
  }

  const handlePassword = (event)=>{
    event.preventDefault()
  }
  const handleCountry =(event)=>{
    event.preventDefault()
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
      <div className={SignupStyle.SignupContainer}>
      <div className={SignupStyle.SignupRightSide}>
        <div className={SignupStyle.SignupRightSideContent}>
          <img className={SignupStyle.SignupImage} src={SecondSolarImage} alt="Background" />
        </div>
      </div>

      <div className={SignupStyle.SignupLeftSide}>
        <div className={SignupStyle.SignupContent}>
            
      <div className={SignupStyle.SignupText}>
        <p  className={SignupStyle.errorMessage ? "errorMessage": "offscreen"} aria-live='assertive'>
        </p>
      <p>{`Signup to find clients that needs your service`}</p>
      </div>

  <form onChange={handleFormSubmit} id={SignupStyle.formFilling} >
    <div className={SignupStyle.SignupForms}>
      <label htmlFor='firstName' ></label>
    <input type="text"
       placeholder="First Name"
       name='firstNamae'
       onChange={handleFirstName}
       required
      />
    </div>
    <div className={SignupStyle.SignupForms}>
      <label htmlFor='lastName' ></label>
      <input type="text"
      name='lastNamae'
      placeholder="Last Name" 
      onChange={handleLastName}
      required
        />
    </div>
    <div className={SignupStyle.SignupForms}>
      <label htmlFor='email'></label>
      <input 
      type="email" 
      name='email' 
      placeholder="example@gmail.com"
      onChange={handleEmail}
      required
        />
    </div>

    <div className={SignupStyle.SignupForms}>
      <label htmlFor='password'></label>
      <input
      type="password" 
      name='password' 
      placeholder="Password"
      onChange={handlePassword}
      required
      />
    
    </div>

    <button onChange={handleFormSubmit} className={SignupStyle.Button} type="submit">
      <a href='/congratulations'>Signup</a> 
    </button>
  </form>
      </div>
      </div>

  </div>
  )
}

export default Signup
