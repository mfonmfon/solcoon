import React, { useState } from 'react';
import HeroStyles from '../../styles/HeroSectionStyles.module.css';
import { HiSearchCircle } from 'react-icons/hi';
import Sponsors from '../sponsors/Sponsors';
import FirstSolarImage from '../../images/heroImages/FirstSolarImage.jpg';
import SecondSolarImage from '../../images/heroImages/SecondSolarImage.jpg'
import { SearchIcon } from 'lucide-react';

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
        <h2>{`Find certified solar technicians near you with Solvas`}</h2>
        <div style={{ position: 'relative' }}>
         
        </div>

        <div className={HeroStyles.button}>
        <button className={HeroStyles}>Get Started</button>
        <button className={HeroStyles}>Get Started</button>
        </div>
        
      </div>

      <div className={HeroStyles.secondHeroImages}>
      </div>
    </div>
  );
};
export default HeroSection;
