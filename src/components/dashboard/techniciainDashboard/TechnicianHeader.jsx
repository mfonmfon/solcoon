import React, { useState } from 'react'
import {technicianData} from '../../../components/header/AppData'
import { Link } from 'react-router-dom'
import { BellIcon, HeartIcon, MessageCircle } from 'lucide-react'
import { GiLoveHowl } from 'react-icons/gi'
import { LuMessageSquareHeart } from 'react-icons/lu'
import TechnicianHeaderStyle from '../../../styles/TechnicianHearder.module.css'
const TechnicianHeader = () => {
  const[search, setSearch] = useState("")

  const handleSearchInput =(event)=>{
    event.preventDefault();
    setSearch()
  }

  return (
    <div  className='container'>
      <div className='nav'>
        <div className='logo'>
          <h1>Solcon</h1>
        </div>

        <div className={TechnicianHeaderStyle.input} >
          <input type='text'
          placeholder='What Service are you looking for today?'
          name='search'
          value={search}
          onChange={handleSearchInput}
          />

        </div>
        <ul>
          <BellIcon/>
          <HeartIcon/>
          {technicianData.map((techData, index)=>(
            <li key={index}>
              <Link to={techData.path}>{techData.order}</Link>
            </li>

          ))}
        </ul>
      </div>
    </div>
  )
}

export default TechnicianHeader
