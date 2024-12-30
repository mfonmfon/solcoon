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
          <h2>John Doe</h2>
          <p>Web Developer | JavaScript Expert</p>
          <p>📍 San Francisco, CA</p>
          <button className={TechnicianProfileStyle.contactBtn}>Contact Me</button>
        </div>
      </div>

      {/* About Section */}
      <div className={TechnicianProfileStyle.profileAbout}>
        <h3>About Me</h3>
        <p>
          I am an experienced web developer specializing in front-end and back-end technologies, <br/>
          with over 5 years of experience building dynamic and responsive websites.
        </p>
        <h4>Skills</h4>
        <ul className={TechnicianProfileStyle.skillsList}>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
        </ul>
      </div>

      {/* Statistics Section */}
      <div className="profileStats">
        <div>
          <h4>Jobs Completed</h4>
          <p>50+</p>
        </div>
        <div>
          <h4>Hours Worked</h4>
          <p>1,200+</p>
        </div>
        <div>
          <h4>Rating</h4>
          <p>4.9/5</p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="profilePortfolio">
        <h3>Portfolio</h3>
        <div className="portfolioGallery">
          <img src="https://via.placeholder.com/100" alt="Project 1" />
          <img src="https://via.placeholder.com/100" alt="Project 2" />
          <img src="https://via.placeholder.com/100" alt="Project 3" />
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
