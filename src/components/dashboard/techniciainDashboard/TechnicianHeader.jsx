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
    setSearch()
  }

  return (
    <div  className={TechnicianHeaderStyle.container}>
      <div className={TechnicianHeaderStyle.nav}>
        <div className={TechnicianHeaderStyle.logo}>
          <h1>Solcon</h1>
        </div>

        <div className={TechnicianHeaderStyle.inputHeader}>
          <input type='text'
          className={TechnicianHeaderStyle.input}
          placeholder='What Service are you looking for today?'
          name='search'
          value={search}
          onChange={handleSearchInput}
          />
          <button className={TechnicianHeaderStyle.button} >
            <FaSearch/>
          </button>
        </div>
        <div className={TechnicianHeaderStyle.userProfile}>
          <BellIcon/>
          <li><Link to={'/order'}>Order</Link></li>
          <li><Link to={'/technicianprofile'}><span>M</span></Link></li>
        </div>
      </div>
      <TechnicianHeroection/>
    </div>
  )
}

export default TechnicianHeader
