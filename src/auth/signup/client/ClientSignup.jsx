import React, {useState, useRef, useEffect} from 'react'
import ClientSignupStyle from '../../auth/signup/ClientSignup.module.css'
import SecondSolarImage from '../../images/heroImages/SecondSolarImage.jpg'

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

  const[id, setId] = useState("")
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[country, setCountry] = useState("");


  // const handleFirstName = (event) =>{
  //   setFirstName(event.target);
  // }
  // const handleLastName = (event)=>{
  //   setLastName(event.target.value)
  // }
  // const handleEmail = (event)=>{
  //   setEmail(event.target.value)
  // }
  // const handlePassword = (event)=>{
  //   setPassword(event.target.value)
  // }
  // const handleCountry =(event)=>{
  //  setCountry(event.target.value)
  // }
  // const handleFormSubmit = async (event)=>{
  //   event.preventDefault()

  
    const [formData, setFormData] = useState({
      id: generateRandomID(),
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      location: 'sabo, yaba',
      isLoggedIn: 'ONLINE',
    });

    const handleFormData = (e) => { const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }
 
    )};
   

    try{
      const responseData = await fetch('http://localhost:8081/register-customer',
        {
          method: "POST",
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            formData
          ),
        });
        if(!responseData.ok)throw new Error(`ERROR:${responseData.statusText}`);
          localStorage.setItem('firstName', JSON.stringify(formData.firstName));
          localStorage.setItem('id', JSON.stringify(formData.id));
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
