import React from 'react'
import ClientReviewCreation from '../clientpost/ClientReviewCreation'
import ClientDashboardStyles from '../../../styles/ClientDashboard.module.css'
import SideBar from '../../../components/sideBar/SideBar'
import clientSideBar from '../../../components/dashboard/clientDashboard/clientSideBarData'
import RecentPost from '../../../components/dashboard/clientDashboard/RecentPost'

const ClientDashboard = ()=>{
  return(
    <div className={ClientDashboardStyles.dashboardContainer}>
      {/* <ClientReviewCreation/> */}
      
      <div className={ClientDashboardStyles.firstSideDashboard}>
      <div className={ClientDashboardStyles.logo}>
      <h4>Solcon</h4>
      </div>
      <div className={ClientDashboardStyles.rightSideContent}>
        <ul className={ClientDashboardStyles.rightSideBarListItems}>
      {/* {clientSideBar.map((clientData, index)=>{
          return(
            <li className={ClientDashboardStyles.rightSideBarList} key={index} onClick={()=>{
              window.location.pathname=clientData.path
            }}>
              <div><span>{clientData.icons}</span></div>
              <div><p>{clientData.text}</p></div>
            </li>
          )
        })} */}
        </ul>
      </div>
    </div>
    <div className={ClientDashboardStyles.secondSideDashboard}>
      <div className={ClientDashboardStyles.leftSideContent}>
       <div className={ClientDashboardStyles.sideBarHeaderContent}>
       <ul className={ClientDashboardStyles.leftSideContentItems}>
          {/* <li className={ClientDashboardStyles.createReview}>Create Reviews</li> */}
          <button className={ClientDashboardStyles.button} 
          onClick={()=>{
            window.location.pathname="/"
          }}
          >Create Reviews</button>
        </ul>
       </div> 
       {/* top reviews from the client */}
       <RecentPost/>
      </div>
    </div>
  </div>
  )
}
export default ClientDashboard