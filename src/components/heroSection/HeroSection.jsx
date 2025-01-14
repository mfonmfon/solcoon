import React, { useState } from 'react';
import HeroStyles from '../../styles/HeroSectionStyles.module.css';
import { HiSearchCircle } from 'react-icons/hi';
import Sponsors from '../sponsors/Sponsors';
import FirstSolarImage from '../../images/heroImages/FirstSolarImage.jpg';
import SecondSolarImage from '../../images/heroImages/SecondSolarImage.jpg'
import { SearchIcon } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const [search, setSearch] = useState('');
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className={HeroStyles.heroSectionContainer}>
     
      <div className={HeroStyles.firstHeroImages}>
        <img src="" alt="" className={HeroStyles.imageOne} />
        <img src="" alt="" className={HeroStyles.imageOne} />
      </div>

      {/* Hero Content */}
      <div className={HeroStyles.heroWrapper}>
        <h2>
        <TypeAnimation
      sequence={[
        "Find certifed solar technicians near you with solcon",
        1000,
        "Discover Certified Solar Professionals in Your Area Through Solcon",
        1000,
        "Certified Solar Experts Are Just a Click Away with Solcon",
        1000,
        "Get Access to Top-Rated Solar Technicians Near You via Solcon",
        1000
      ]}
      wrapper='span'
      speed={50}
      style={{ fontSize: '', display: 'inline-block', color: 'white'}}
      repeat={Infinity}
      />
        </h2>
        <div>

        </div>
        <div style={{ position: 'relative' }}>
         
        </div>

        {/* <div className={HeroStyles.button}>
        <button className={HeroStyles} onClick={()=>{
          window.location.pathname='/join'
        }}>Get Started</button>
        <button className={HeroStyles}>Get Started</button>
        </div> */}
        
      </div>

      <div className={HeroStyles.secondHeroImages}>
      </div>
    </div>
  );
};
export default HeroSection;
