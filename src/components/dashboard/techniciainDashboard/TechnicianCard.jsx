import React from 'react'
import TechnicianCardStyle from '../../../styles/TechnicianCards.module.css'
import { TbRating14Plus } from 'react-icons/tb'
import technicianDashboardData, { socialMediaData } from '../../../components/dashboard/techniciainDashboard/technicianCardData'
import PictureTwo from '../../../images/dashboardimages/PictureTwo.jpg'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
const TechnicianCard = () => {
  
  return (
    <div className={TechnicianCardStyle.container}>
     <div className={TechnicianCardStyle.teamHeader}>
     <h1 className={TechnicianCardStyle.topTechnicianText}>Top technicians,</h1>
     <div className={TechnicianCardStyle.viewAll} >
      <p onClick={()=>{
        window.location.pathname='/view all'
      }}>View all</p>
     </div>
     <div className={TechnicianCardStyle.teamContent}>
      {technicianDashboardData.map((data, index)=>{
        return(
          <div className={TechnicianCardStyle.box} key={index}>
            <div className={TechnicianCardStyle.details}>
              <div className={TechnicianCardStyle.image}>
              <img className={TechnicianCardStyle} src={data.technicianImageUrl} alt='' />
              <i className={TechnicianCardStyle.icon}>{data.tickingIcon}</i>
              </div>
              <i className={TechnicianCardStyle.iconTwo}>{data.locationIcon}</i>
              <label htmlFor=''>{data.techncianLocation}</label>
                <h4>{data.technicianAppName}</h4>
                <p>{data.description}</p>

                <ul>
                  {socialMediaData.map((socialMedia, index)=>{
                    return(
                      <li key={index}>
                        <i className={socialMedia.facebookIcon}></i>
                      </li>
                    )
                  })}
                </ul>
                <div>
                  <button>
                    <i className={TechnicianCardStyle}><FaEnvelope/></i>
                  </button>

                  <button className={TechnicianCardStyle}>
                    <i className={TechnicianCardStyle}><FaPhoneAlt/></i>
                  </button>
                </div>

            </div>

          </div>
        )
        })}
     </div>
     
     </div>
    </div>
  ) 
}
export default TechnicianCard
