import React from 'react'
import SideBarStyles from '../../styles/SideBar.module.css'
import { SideBarData } from '../header/AppData'
import TechnicianCard from '../dashboard/techniciainDashboard/TechnicianCard'
const SideBar = () => {
  return (
    <div className={SideBarStyles.container}>
      <div className={SideBarStyles.content}>
        <ul  className={SideBarStyles.SideBarItems}>
         
          {SideBarData.map((value, index)=>(
            <li key={index} className={SideBarStyles.SideBarItemsList}

              onClick={()=>{
              window.location.pathname=value.path
             }}>
             <div className={SideBarStyles}><span>{value.icons}</span></div>
             <div className={SideBarStyles}><h4>{value.userProfile}</h4></div>
            </li>
          ))}
        </ul>
      </div>
      
      <TechnicianCard />
    </div>
   
  )
}

export default SideBar
