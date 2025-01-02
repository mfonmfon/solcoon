import React from 'react'
import Header from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import Sponsors from '../../components/sponsors/Sponsors'
import PopularService from '../../components/cards/PopularService'
import TechnicianCard from '../../components/cards/TechnicianCard'
import UserOptions from '../../auth/UserOptions/UserOptions'
import FindTechnicianCard from '../../components/cards/FindTechnicianCard'
import Footer from '../../components/footer/Footer'
import MappingDesign from '../../components/mapping/MappingDesign'
import AskQuestions from '../../components/askQuestions/AskQuestions'

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <HeroSection />
      <PopularService />
      <FindTechnicianCard/>
      <MappingDesign/>
      <AskQuestions/>
      <TechnicianCard />
      <Footer/>
    </div>
  )
}

export default LandingPage
