import React from 'react'
import TechnicianHeader from '../../../components/dashboard/techniciainDashboard/TechnicianHeader'
import TechnicianHeroection from '../../../components/dashboard/techniciainDashboard/TechnicianHeroection'
import SideBar from '../../sideBar/SideBar'
import FindTechnicianCard from '../../../components/dashboard/techniciainDashboard/TechnicianCard'
const TechnicianDashboard = ()=>{
  return (
    <div className=''>
      <TechnicianHeader/>
      {/* <TechnicianHeroection/> */}
      <FindTechnicianCard/>
     
    </div>
  )
}
export default TechnicianDashboard