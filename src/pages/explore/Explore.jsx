import React from 'react'
import TechnicianProfile from '../../components/userProfile/technicianProfile/TechnicianProfile'
import Header from '../../components/header/Header'
import ExploreHeroSection from '../../components/heroSection/exploreHero/ExploreHeroSection'
import GetInspiredGrid from '../../components/getInspiredGrid/GetInspiredGrid'
import AskQuestion from '../../components/askQuestions/AskQuestions'
import ClientDashboard from '../../components/dashboard/clientDashboard/ClientDashboard'
import ClientPostCreation from '../../components/dashboard/clientpost/ClientPostCreation'
import FindTechnician from '../../components/dashboard/findtechnician/FindTechnician'
const Explore = () => {
  return (
    <div>
      {/* <Header/> */}
      {/* <ExploreHeroSection/> */}
      {/* <GetInspiredGrid/> */}
      {/* <AskQuestion /> */}
      <ClientPostCreation/>
      {/* <ClientDashboard/> */}
      {/* <FindTechnician/> */}
    </div>
  )
}

export default Explore
