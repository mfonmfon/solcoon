import React from 'react'
import TechnicianProfile from '../../components/userProfile/technicianProfile/TechnicianProfile'
import Header from '../../components/header/Header'
import ExploreHeroSection from '../../components/heroSection/exploreHero/ExploreHeroSection'
import GetInspiredGrid from '../../components/getInspiredGrid/GetInspiredGrid'
import AskQuestion from '../../components/askQuestions/AskQuestions'
const Explore = () => {
  return (
    <div>
      <Header/>
      <ExploreHeroSection/>
      {/* <TechnicianProfile /> */}
      <GetInspiredGrid/>
      <AskQuestion />
    </div>
  )
}

export default Explore
