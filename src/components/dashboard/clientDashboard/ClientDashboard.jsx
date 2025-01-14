import React from 'react'
import ClientReviewCreation from '../clientpost/ClientReviewCreation'
import ClientDashboardStyles from '../../../styles/ClientDashboard.module.css'
import SideBar from '../../../components/sideBar/SideBar'
import clientSideBar from '../../../components/dashboard/clientDashboard/clientSideBarData'
import RecentPost from '../../../components/dashboard/clientDashboard/RecentPost'
import RecentReviews from './RecentReviews'

const ClientDashboard = ()=>{
  return(
    <div className={ClientDashboardStyles.dashboardContainer}>
      {/* <ClientReviewCreation/> */}
    <div className={ClientDashboardStyles.secondSideDashboard}>
      <div className={ClientDashboardStyles.leftSideContent}>
       <div className={ClientDashboardStyles.sideBarHeaderContent}>
       <ul className={ClientDashboardStyles.leftSideContentItems}>
          <button className={ClientDashboardStyles.button} 
          onClick={()=>{
            window.location.pathname="/"
          }}
          >Create Reviews</button>
        </ul>
       </div> 
       {/* top reviews from the client */}
       <RecentPost/>
        {/* top reviews from the clients */}
      <RecentReviews/>
      </div>
    </div>

  </div>
  )
}
export default ClientDashboard