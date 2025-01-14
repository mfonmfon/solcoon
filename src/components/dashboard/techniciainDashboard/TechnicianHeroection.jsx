import React, {useState, useEffect} from 'react'
import TechnicianHeroectionStyle from '../../../styles/TechnicianHeroection.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLocation } from 'react-router-dom';
import { SideBarData, sliderData } from '../../header/AppData';
const TechnicianHeroection = () => {
  const[firstName, setFirstName] = useState();
  // JSON.parse(localStorage.getItem("firstName"))
  useEffect(()=>{
    const storedFirstName = localStorage.getItem(`firstName`)
    if(storedFirstName){
      setFirstName(storedFirstName)
    }

  },[])
  // const firstName = user?.firstName
  console.log(firstName)
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
  
  return (
    <div className={TechnicianHeroectionStyle.container}>
       <div className={TechnicianHeroectionStyle.welcomeMessage}>
        {/* Render the welcome message */}
        <h1>Welcome, {firstName}</h1>
      </div>
      <div className={TechnicianHeroectionStyle.content}>
      </div>
    </div>
  )
}

export default TechnicianHeroection
