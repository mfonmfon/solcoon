import React, { useState } from 'react';
import SignupStyle from '../../auth/signup/Signup.module.css';
import SecondSolarImage from '../../images/signup/SignupImage.jpg';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserIcon } from 'lucide-react';
import { MdEmail } from 'react-icons/md';


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


const Signup = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: generateRandomID(),
    subscriptionStatus: 'FREE',
    userType: 'TECHNICIAN',
    subscriptionType: 'MONTHLY',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    location: '',
    nin: '0982654371',
    isLoggedIn: 'ONLINE',
  });
  console.log("Check here for the error",formData)
  const handleFormData = (e) => {
     const { name, value } = e.target;
   setFormData({ ...formData, [name]: value }
   )};

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true) 
    try {
      console.log(formData)
      const response = await fetch('http://localhost:8080/register-customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });
     
      if (response.ok) {
        const data = await response.json(); 
        console.log(data)
        localStorage.setItem('userDetails', JSON.stringify(formData));
        toast.success('Signup successful', {
          onClose: () => navigate("/technicianassessment"), 
          autoClose: 2000,
        });

      } else {
        const data = await response.json(); // Parse error response JSON
        toast.error(data.error, 'Signup failed. Please try again.')
        setError(data.error,'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('Failed to signup. Please try again later.')
      setError('An unexpected error occurred. Please try again later.');
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <div className={SignupStyle.SignupContainer}>
      {isLoading &&(
        <div className={SignupStyle.loaderOverlay}>
          <div className={SignupStyle.load}></div>
        </div>
      )}
      <div className={SignupStyle.SignupRightSide}>
        <div className={SignupStyle.SignupRightSideContent}>
        <div>
        <img
            className={SignupStyle.SignupImage}
            src={SecondSolarImage}
            alt="Background"/>
        </div>
        </div>
      </div>

      <div className={SignupStyle.SignupLeftSide}>
        <div className={SignupStyle.SignupContent}>
          <div className={SignupStyle.SignupText}>
            {error && (
              <p style={{backgroundColor:'black', color:'white',
               fontSize:'10px', borderRadius:'5px', padding:'5px'}} 
                className={SignupStyle.errorMessage ? 'error': 'offScreen'} aria-live="assertive">
                {error}
              </p>
            )}
            <p>Signup as a technician</p>
          </div>

          <form onSubmit={handleSignupSubmit} id={SignupStyle.formFilling}>
            <div className={SignupStyle.SignupForms}>
              {/* <label htmlFor="firstName">First Name</label> */}
              <input
                type="text"
                placeholder={'First name'}
                name="firstName"
                value={formData.firstName}
                onChange={handleFormData}
                className={SignupStyle.inputName}
                required
              />
            {/* <UserIcon /> */}
            </div>

            <div className={SignupStyle.SignupForms}>
              {/* <label htmlFor="lastName">Last Name</label> */}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleFormData}
                required
              />
              {/* <UserIcon /> */}
            </div>

            <div className={SignupStyle.SignupForms}>
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleFormData}
                required
              />
        
            </div>

            
            <div className={SignupStyle.SignupForms}>
              {/* <label htmlFor="location">Location</label> */}
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleFormData}
                required
              />
            </div>


            <div className={SignupStyle.SignupForms}>
            <label htmlFor="phoneNumber"></label>
            <input
              type="tel" // "tel" is the correct type for phone number inputs
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+234"
              value={formData.phoneNumber}
              onChange={handleFormData}
              pattern="^\+?\d{1,15}$" // Regex pattern for validation
              required
            />
            </div>

            <div className={SignupStyle.SignupForms}>
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleFormData}
                required
              />
            </div>

            

            <button onClick={handleSignupSubmit} className={SignupStyle.Button} type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Signup;
