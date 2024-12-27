import React from 'react'
import Header from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import Sponsors from '../../components/sponsors/Sponsors'
import PopularService from '../../components/cards/PopularService'
import TechnicianCard from '../../components/cards/TechnicianCard'
import UserOptions from '../../auth/UserOptions/UserOptions'
import FindTechnicianCard from '../../components/cards/FindTechnicianCard'

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <HeroSection />
      <PopularService />
      <FindTechnicianCard/>
      <TechnicianCard />      
    </div>
  )
}

export default LandingPage
