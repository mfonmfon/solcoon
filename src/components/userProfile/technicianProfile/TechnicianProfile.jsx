import React from 'react'
import TechnicianProfileStyle from '../../../styles/TechnicianProfile.module.css'
import { UserCircle2Icon } from 'lucide-react'
import MfonPic from '../../../images/heroImages/MfonPics.jpg'
const TechnicianProfile = () => {
  return (
    <div className={TechnicianProfileStyle.profileContainer}>
     
      <div className={TechnicianProfileStyle.profileHeader}>
        
        <img 
          src={MfonPic} 
          alt="Profile" 
          className={TechnicianProfileStyle.profilePicture}
        />
        <div className={TechnicianProfileStyle.profileInfo}>
          <h2>Mfon Mfon</h2>
          <p>Certified Technician</p>
          <p>📍 Akwa Ibom State, Nigeria</p>
          <button  className={TechnicianProfileStyle.contactBtn}
          
           >Edit Profile</button>
        </div>
      </div>

      {/* About Section */}
      <div className={TechnicianProfileStyle.profileAbout}>
        <h3>About Me</h3>
        <p>
          I am an experienced web developer specializing in front-end and back-end technologies, <br/>
          with over 5 years of experience building systems.
        </p>
        <h4>Skills</h4>
        <ul className={TechnicianProfileStyle.skillsList}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* Statistics Section */}
      <div className="profileStats">
        <div>
          <h4>Jobs Completed</h4>
          <p>50+</p>
        </div>
        {/* <div>
          <h4>Hours Worked</h4>
          <p>1,200+</p>
        </div> */}
        <div>
          <h4>Rating</h4>
          <p>4.9/5</p>
        </div>
      </div>


      {/* Reviews Section */}
      <div className="profileReviews">
        <h3>Client Reviews</h3>
        <div className="Review">
          <p><strong>Client A:</strong> Excellent work! Very professional and efficient.</p>
        </div>
        <div className="Review">
          <p><strong>Client B:</strong> Delivered exactly what I needed, highly recommended!</p>
        </div>
      </div>
    </div>
  )
}

export default TechnicianProfile
