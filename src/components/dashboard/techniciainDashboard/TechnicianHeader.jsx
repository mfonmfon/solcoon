import React, { useState } from 'react'
import {technicianData} from '../../../components/header/AppData'
import { Link } from 'react-router-dom'
import { BellIcon, HeartIcon, MessageCircle } from 'lucide-react'
import { GiLoveHowl } from 'react-icons/gi'
import { LuMessageSquareHeart } from 'react-icons/lu'
import TechnicianHeaderStyle from '../../../styles/TechnicianHearder.module.css'
import TechnicianHeroection from '../../../components/dashboard/techniciainDashboard/TechnicianHeroection'
import { FaSearch } from 'react-icons/fa'
const TechnicianHeader = () => {
  const[search, setSearch] = useState("")

  const handleSearchInput =(event)=>{
    event.preventDefault();
    setSearch(search)
  }

  return (
    <div className={TechnicianHeaderStyle.headerContainer}>
      <div className={TechnicianHeaderStyle.headerContent}>
       <div className={TechnicianHeaderStyle.navHeader}>
        <div className={TechnicianHeaderStyle.dashboardLogo}>
          <h2>Solcon</h2>
        </div>
       <ul className={TechnicianHeaderStyle.navBarItems}>
          {technicianData.map((items, index)=>{
            return(
              <li key={index}>
                <Link to={items.path}>{items.order}</Link>
              </li>
            )})}
        </ul>
        <div className={TechnicianHeaderStyle.secondContentLink}>
          <h1>Check</h1>
        </div>
       </div>
      </div>
    </div>
  )
}

export default TechnicianHeader
