import React from 'react'
import SponsorsStyles from '../../styles/Sponsors.module.css'
import { sponsorsData } from '../header/AppData'
import { Link } from 'react-router-dom'
const Sponsors = () => {
  return (
    <div className={SponsorsStyles.sponsorsContainer}>
      <h4>{`Trusted by:`}</h4>
        {sponsorsData.map((data, index)=>(
          <div className={SponsorsStyles.sponsorImages} key={index}>
            <img  src={data.image} alt=''/>
          </div>
        ))}
    </div>
  )
}

export default Sponsors
