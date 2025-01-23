import React, {useState, useEffect} from 'react'
import TechnicianAssessmentStyle from '../../styles/TechnicianAssessment.module.css'
import TechnicianAssessmentImage from '../../images/assessmentImage/CustomerCare.jpg'
import { useNavigate } from 'react-router-dom';
const TechnicianAssessment = () => {
  const[assessmentFormData, setAssessmentFormData] = useState({

  }) 
  const navigateToTheTechnicianDashboard = useNavigate()
  const[firstName, setFirstName] = useState();
 
   
   useEffect(()=>{
      const storedFirstName = localStorage.getItem(`firstName`)
      // const parsedStoredFirstName = JSON.parse(storedFirstName)
      // console.log(parsedStoredFirstName)
      if(storedFirstName){
       setFirstName(JSON.parse(storedFirstName))
      }
  
    },[])
    // const firstName = user?.firstName
    console.log(firstName)

    const handleAssessmentFormSubmit = async (event)=>{
      event.preventDefault();
      try{
        const assessmentResponseData = await fetch('',{
          method: 'POST',
          headers:{
            'Content-type': 'application/json',
          },
          body: JSON.stringify()
        });
        if(assessmentResponseData.ok){
          const assessmentResponseJson = await assessmentResponseData.json();
          
          
          console.log(assessmentResponseJson)
          navigateToTheTechnicianDashboard('/technicianDashboard');
        }

      }
      catch(error){

      }

    }
  return (
    <div className={TechnicianAssessmentStyle.container}>
      <div className={TechnicianAssessmentStyle.textHeader}>
        <h1>{`Hey ${firstName}. Ready for your next big opportunity?`}</h1>


      </div>
      <div className={TechnicianAssessmentStyle.assessmentHeader}>
        <div className={TechnicianAssessmentStyle.assessmentHeaderLeft}>
          <div className={TechnicianAssessmentStyle.assessmentLeftFormContent}>
            <form onSubmit={handleAssessmentFormSubmit} className={TechnicianAssessmentStyle.leftForm}>
        <label>
        Upload your certification document.
          <input 
          type='file'
          name='certificationFile'
          // onChange={''}
          accept='jpeg, png, pdf'
          className={TechnicianAssessmentStyle.assesementInput}
          required
          />
        </label>
       
        <label>
        What types of solar systems are you certified to install or maintain and repair?
          <select
          name='certificationType'
          // onChange={}
          required
          >
            <option>Choose the types of solar systems below</option>
            <option value={'residential'}>Commercial</option>
            <option value={'residential'}>Business</option>
            <option  value={'residential'}>residential</option>
            <option value={'residential'}>Commercial</option>
            <option value={'residential'}>Business</option>
          </select>
        </label>

        <label>
        Have you completed any safety training programs related to solar installations?
        <input
        type='text'
        name='safetyTraining'
        // onChange={''}
        placeholder='Yes or no'
        className={TechnicianAssessmentStyle.assesementInput}
        required  
        />
        </label>

        <label>
        How many years of experience do you have in solar installations or maintenance?

       <select 
       name='yearsOfExperience'
      //  value={''}
      //  onChange={''}
       required
       >
        <option>Choose the number of years</option>
        <option value={'1'}>1</option>
        <option value={'2'}>2</option>
        <option value={'3'}>2</option>
        <option value={'4'}>3</option>
        <option value={'5'}>4</option>
       </select>
        </label>   

         <label>
        Upload a picture of you.
          <input 
          type='file'
          name='profilePicture'
          // value={''}
          // onChange={''}
          accept='jpeg, png, pdf'
          required
          />
        </label>    


        <textarea 
        style={{width: '100%', height: '100px', 
          padding: '10px', 
          border: '1px solid #ccc',
           borderRadius: '5px',
            resize: 'none'
          }}
        name='bio'
        // value={''}
        // onChange={''}
        placeholder='Write a short bio about yourself.'
        >
        </textarea> 
        
            </form>
            <button className={TechnicianAssessmentStyle.assessmentSubmitButton} onClick={()=>{
              window.location.pathname= '/techniciandashboard'
            }} >Submit</button>
          </div>
        </div>

        <div className={TechnicianAssessmentStyle.assessmentHeaderRight}>
          <div className={TechnicianAssessmentStyle.assessmentRightFormContent}>
            <div className={TechnicianAssessmentStyle.assessmentImage}>
              <img className={TechnicianAssessmentStyle.image} src={TechnicianAssessmentImage} alt=''/>
            </div>
            <div className={TechnicianAssessmentStyle.data}>
              {/* <h2 className={TechnicianAssessmentStyle.customerCareName}>Bola Olamide</h2>
              <h5 className={TechnicianAssessmentStyle.customerCareTitle}>Solar technician consultant</h5>
              <p className={TechnicianAssessmentStyle.customerCareLocation}>Lagos, Nigeria</p> */}
              
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default TechnicianAssessment
