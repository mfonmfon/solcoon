import React from 'react'
import FooterStyle from '../../styles/Footer.module.css'
import { footerFirtData, footerSecondData, footerThirdData } from '../header/AppData'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className={FooterStyle.footerContainer}>
     <div className={FooterStyle.footerItems}>
      {/* first data */}
      <div className={FooterStyle.firstListItems}>
      <h2>{`For Client`}</h2>
        {footerFirtData.map((data, index)=>(
          <li key={index}>
            <Link to={data.path}>{data.text}</Link>
          </li>
        ))}
      </div>
      {/* second data  */}
      <div className={FooterStyle.secondListItems}>
        <h2>{`For Technician`}</h2>
        {footerSecondData.map((data, secondIndex) =>(
          <li key={secondIndex}>
            <Link to={data.path}>{data.text}</Link>
          </li>
        ))}
      </div>
      {/* third data */}
      <div className={FooterStyle.thirdListItems}>
      <h2>{`Company`}</h2>
        {footerThirdData.map((data, thirdIndex)=>(
          <li key={thirdIndex}>
            <Link to={data.path}>{data.text}</Link>
          </li>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Footer
