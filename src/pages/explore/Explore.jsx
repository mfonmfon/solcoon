import React from 'react'
import TechnicianProfile from '../../components/userProfile/technicianProfile/TechnicianProfile'
import Header from '../../components/header/Header'
import ExploreHeroSection from '../../components/heroSection/exploreHero/ExploreHeroSection'
import GetInspiredGrid from '../../components/getInspiredGrid/GetInspiredGrid'
const Explore = () => {
  return (
    <div>
      <Header/>
      <ExploreHeroSection/>
      {/* <TechnicianProfile /> */}
      <GetInspiredGrid/>
    </div>
  )
}

export default Explore
