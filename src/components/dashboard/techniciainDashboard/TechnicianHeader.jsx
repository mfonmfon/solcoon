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
    <div className="header">
      <div className="logo">InstaClone</div>
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="icons">
        <span className="icon">🔔</span>
        <span className="icon">✉️</span>
        <span className="icon">👤</span>
      </div>
    </div>
  )
}

export default TechnicianHeader
