import React,{useEffect, useState} from 'react'
import TechnicianCardStyle from '../../../styles/TechnicianCards.module.css'
import { TbRating14Plus } from 'react-icons/tb'
import technicianDashboardData, { socialMediaData } from '../../../components/dashboard/techniciainDashboard/technicianCardData'
import PictureTwo from '../../../images/dashboardimages/PictureTwo.jpg'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { technicianData } from '../../header/AppData'
const TechnicianCard = () => {
  const [users, setUsers] = useState([]);
  const[currentUser, setCurrentUser] = useState(null);

  useEffect(()=>{
    const techniciansDetails = localStorage.getItem('userDetails') || []
    const currentUserId = localStorage.getItem('currentUserId')
    if(techniciansDetails){
     const parsedTechniciansDetails = JSON.parse(techniciansDetails);
     console.log(parsedTechniciansDetails);
     setUsers(Array.isArray(parsedTechniciansDetails)? parsedTechniciansDetails: [parsedTechniciansDetails]); 
    }
  },[]);

  if(users.length===0){
    return<div>No user data available</div>
  }
  return (
    <div className={TechnicianCardStyle.container}>
      <br/>
      <br/>
     <div className={TechnicianCardStyle.teamHeader}>
     <h4 className={TechnicianCardStyle.topTechnicianText}>Top technicians,</h4>
     <div className={TechnicianCardStyle.viewAll} >
      <p onClick={()=>{
        window.location.pathname='/view all'
      }}>View all</p>
     </div>
     <div className={TechnicianCardStyle.teamContent}>
      {users.map((data, index)=>{
        return(
          <div className={TechnicianCardStyle.box} key={index}>
            <div className={TechnicianCardStyle.details}>
              <div className={TechnicianCardStyle.image}>
              <img style={{backgroundColor:'gray'}} className={TechnicianCardStyle.img} src={data.technicianImageUrl} alt=''/>
              <i className={TechnicianCardStyle.icon}>{data.tickingIcon}</i>
              </div>
              <i className={TechnicianCardStyle.iconTwo}>{data.locationIcon}</i>
              <label htmlFor=''>{data.location}</label>
                <h4>{data.firstName} {data.lastName}</h4>
                <p>{data.dexcription ||"No Data or description here yet"}</p>

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
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>

     <div className={TechnicianCardStyle.teamContent}>
      {technicianDashboardData.map((data, index)=>{
        return(
          <div className={TechnicianCardStyle.box} key={index}>
            <div className={TechnicianCardStyle.details}>
              <div className={TechnicianCardStyle.image}>
              <img style={{backgroundColor:'gray'}} className={TechnicianCardStyle.img} src={data.technicianImageUrl} alt=''/>
              <i className={TechnicianCardStyle.icon}>{data.tickingIcon}</i>
              </div>
              <i className={TechnicianCardStyle.iconTwo}>{data.locationIcon}</i>
              <label htmlFor=''>{data.location}</label>
                <h4>{data.technicianAppName}</h4>
                <p>{data.dexcription ||"No Data or description here yet"}</p>

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
