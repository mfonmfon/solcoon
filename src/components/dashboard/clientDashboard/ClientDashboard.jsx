import React from 'react'
import ClientReviewCreation from '../clientpost/ClientReviewCreation'
import ClientDashboardStyles from '../../../styles/ClientDashboard.module.css'
import SideBar from '../../../components/sideBar/SideBar'
import clientSideBar from '../../../components/dashboard/clientDashboard/clientSideBarData'
import RecentPost from '../../../components/dashboard/clientDashboard/RecentPost'
import RecentReviews from './RecentReviews'
import clientNavBarData, { clientSecondSubDashboardData, clientSubDashboardData } from './ClientHeaderData'
import secondClientNavBarData from './ClientHeaderData'
import { Link, Outlet } from 'react-router-dom'
import { BiNotification } from "react-icons/bi";
import { AppWindowIcon, BellIcon } from 'lucide-react'
import ClientSearchInput from '../../../components/dashboard/clientDashboard/ClientSearchInput'
import ClientSideBar from '../../../components/dashboard/clientDashboard/ClientSideBar'
import Footer from '../../footer/Footer'
import ClientHeader from './ClientHeader'
const ClientDashboard = ()=>{
  return(
    <>
    <ClientHeader/>
    <div className={ClientDashboardStyles.dashboardContainer}>
      <div className={ClientDashboardStyles.leftSide}>
        <ClientSideBar/>
      </div>
      <div className={ClientDashboardStyles.middleSide}>
        <Outlet/>
        <div className={ClientDashboardStyles.dasboardCardHeader}>
          <div className={ClientDashboardStyles.headCard}>
            <h3>Welcome here</h3>
            <p>Check here to see if it works</p>
            <button className={ClientDashboardStyles.CardBtn}>Click</button>
          </div>

          <div className={ClientDashboardStyles.dashboardSubLinks}>
            <div className={ClientDashboardStyles.subLink}>
              {clientSubDashboardData.map((item, index)=>{
                return(
                  <li className={ClientDashboardStyles.subLinkItem} key={index}>
                    <Link to={item.path}>{item.text}</Link>
                  </li>
                )
              })}
            </div>
            <div className={ClientDashboardStyles.secondSubLink}>
              {clientSecondSubDashboardData.map((secondItems, index)=>{
                return(
                  <li key={index}>
                    <Link to={secondItems.path}>{secondItems.text}</Link>
                  </li>
                )
              })}
            </div>
          </div>
      </div>

      <div className={ClientDashboardStyles.recommendedClientPost}>
        <RecentPost/>
      </div>
      <div className={ClientDashboardStyles.dashboardFooter}>
        
      </div>
      </div>

      <div className={ClientDashboardStyles.rightSide}>
        <div className={ClientDashboardStyles.dashboardProfile}>
          <h1>Top Technicians </h1>
        </div>
      </div>

    </div>
    </>
  )
}
export default ClientDashboard