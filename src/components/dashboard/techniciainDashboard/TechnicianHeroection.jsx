import React, {useState} from 'react'
import TechnicianHeroectionStyle from '../../../styles/TechnicianHeroection.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLocation } from 'react-router-dom';
import { SideBarData, sliderData } from '../../header/AppData';
const TechnicianHeroection = () => {
  const settings = {
    dot: false,
    infinite: true,
    arrow: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  }
  const location =  useLocation()
  const user = location.state?.user||JSON.parse(localStorage.getItem("userDetails"))
  const firstName = user?.firstName
  return (
    <div className={TechnicianHeroectionStyle.container}>
       <div className={TechnicianHeroectionStyle.welcomeMessage}>
        {/* Render the welcome message */}
        <h1>Welcome, {firstName}</h1>
      </div>
      <div className={TechnicianHeroectionStyle.content}>
        <Slider {...settings}>
          {sliderData.map((slide,index)=>(
            <div className={TechnicianHeroectionStyle} key={index}>
              <img className={TechnicianHeroectionStyle.image} src={slide.image} alt=''/>
              
              <div>
              <p className={TechnicianHeroectionStyle.text}> {slide.title}</p>
              </div>
            </div>
          ))}
        </Slider>
        
      </div>
    </div>
  )
}

export default TechnicianHeroection
