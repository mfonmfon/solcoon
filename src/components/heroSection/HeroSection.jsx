import React, { useState } from 'react';
import HeroStyles from '../../styles/HeroSectionStyles.module.css';
import { HiSearchCircle } from 'react-icons/hi';
import Sponsors from '../sponsors/Sponsors';

const HeroSection = () => {
  const [search, setSearch] = useState('');

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={HeroStyles.heroSectionContainer}>
      {/* First Images */}
      <div className={HeroStyles.firstHeroImages}>
        <img src="" alt="" className={HeroStyles.imageOne} />
        <img src="" alt="" className={HeroStyles.imageOne} />
      </div>

      {/* Hero Content */}
      <div className={HeroStyles.heroWrapper}>
        <h2>{`Find certified solar technicians near you with Solvas`}</h2>
        <div style={{ position: 'relative' }}>
          <input
            onChange={handleSearchInput}
            className={HeroStyles.heroSearchInput}
            type="search"
            name="search"
            placeholder="Search for any technician"
            value={search}
          />
          <HiSearchCircle size={50} className={HeroStyles.searchIcon} />
        </div>
        <Sponsors />
      </div>

      {/* Second Images */}
      <div className={HeroStyles.secondHeroImages}>
        <img src="" className={HeroStyles.imageTwo} alt="" />
        <img src="" className={HeroStyles.imageTwo} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
