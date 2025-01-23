import React, {useState, useRef, useEffect} from 'react'
import ClientSignupStyle from '../../../auth/signup/Signup.module.css'
import SecondSolarImage from '../../../images/heroImages/SecondSolarImage.jpg'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const generatedIDs = new Set(); 
function generateRandomID() {
  let id;
  
  // Keep generating a random ID until it's unique
  do {
    id = Math.floor(Math.random() * 1000000);  // Generate a random number
  } while (generatedIDs.has(id));  // Check if the ID already exists in the Set
  
  generatedIDs.add(id);  // Add the new unique ID to the Set
  
  return id;
}


const ClientSignup = () => {  
  
  const navigateTo = useNavigate();
  const[clientSignupFormData, setClientSignupFormData] = useState({
    customerId:generateRandomID(),
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber:"09124565321",
    location: "YABA, LAGOS",
    nin: "0901254768",
    password: "",
    isLoggedIn: "ONLINE",
  })

  const handelClientSignupFormChange = (event)=>{
    const {name, value} = event.target;
    setClientSignupFormData({...clientSignupFormData, [name]: value});
  }

  const handleClientSignupFormSubmit = async (event)=>{
    event.preventDefault();
    console.log(clientSignupFormData);

    // if(!clientSignupFormData.firstName|| !clientSignupFormData.lastName|| 
    //   !clientSignupFormData.location || !clientSignupFormData.phoneNumber|| !clientSignupFormData.email 
    //   || !clientSignupFormData.password)toast.error("All input fields are required")

    try{
      const clientSignupFormResponseData = await fetch('http://localhost:8081/register-customer', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(clientSignupFormData)
      });

      if(clientSignupFormResponseData.ok){
        const formResult = await clientSignupFormResponseData.json();
        console.log(formResult);
        console.log("Signup successful")
        toast.success('Signup successful')
        navigateTo('/clientdashboard')
      }else{
        console.log("Failed to signup");
       toast('Failed to signup')
      }
    }catch(error){
      console.log(error);
      alert.error("Failed to signup client ")
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

  <form onSubmit={handleClientSignupFormSubmit} id={ClientSignupStyle.formFilling} >
    <div className={ClientSignupStyle.SignupForms}>
      <label htmlFor='firstName' ></label>
    <input type="firstName"
       placeholder="First Name"
       name='firstNamae'
       onChange={handelClientSignupFormChange}
       required
      />
    </div>

    <div className={ClientSignupStyle.SignupForms}>
      <label htmlFor='lastName' ></label>
      <input type="lastName"
      name='lastNamae'
      placeholder="Last Name" 
      onChange={handelClientSignupFormChange}
      required
        />
    </div>

    <div className={ClientSignupStyle.SignupForms}>
      <label htmlFor='email'></label>
      <input 
      type="email" 
      name='email' 
      placeholder="example@gmail.com"
      onChange={handelClientSignupFormChange}
      required
        />
    </div>

    <div className={ClientSignupStyle.SignupForms}>
      <label htmlFor='password'></label>
      <input
      type="password" 
      name='password' 
      placeholder="Password"
      onChange={handelClientSignupFormChange}
      required
      />
    
    </div>

    <button  className={ClientSignupStyle.ClientButton} type="submit">
    Signup 
    </button>
  </form>
      </div>
      </div>
      <ToastContainer/>

  </div>
  )
}


export default ClientSignup
