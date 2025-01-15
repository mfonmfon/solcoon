import React from 'react'
import ClientReviewCreation from '../clientpost/ClientReviewCreation'
import ClientDashboardStyles from '../../../styles/ClientDashboard.module.css'
import SideBar from '../../../components/sideBar/SideBar'
import clientSideBar from '../../../components/dashboard/clientDashboard/clientSideBarData'
import RecentPost from '../../../components/dashboard/clientDashboard/RecentPost'
import RecentReviews from './RecentReviews'
import clientNavBarData from './ClientHeaderData'
import secondClientNavBarData from './ClientHeaderData'
import { Link } from 'react-router-dom'
import { BiNotification } from "react-icons/bi";
import { AppWindowIcon, BellIcon } from 'lucide-react'
import ClientSearchInput from '../../../components/dashboard/clientDashboard/ClientSearchInput'

const ClientDashboard = ()=>{
  return(
    <div className={ClientDashboardStyles.dashboardContainer}>
    <div className={ClientDashboardStyles.secondSideDashboard}>
      <div className={ClientDashboardStyles.leftSideContent}>
       <div className={ClientDashboardStyles.sideBarHeaderContent}>
       <div className={ClientDashboardStyles.dashboardLogo}>
        <h2 className={ClientDashboardStyles.dashboardLogoText}>Solcon</h2>
       </div>
       <ul className={ClientDashboardStyles.leftSideContentItems}>
         {clientNavBarData.map((items, index)=>{
          return(
            <li key={index}>
              <Link to={items.path}>{items.text}</Link>
            </li>
          )}
          )}
        </ul>
       </div> 
       {/* Client search input here */}
       <ClientSearchInput/>
       {/* top post from the client */}
       <div>
       <RecentPost/>
       </div>
        {/* top reviews from the clients */}
      <div>
      <RecentReviews/>
      </div>
      </div>
    </div>

  </div>
  )
}
export default ClientDashboard