import React from 'react'
import ClientHeaderStyle from '../../../styles/ClientHeader.module.css'
import clientNavBarData from './ClientHeaderData'
import {Link} from 'react-router-dom'
import ClientSearchInput from './ClientSearchInput'
import { SearchIcon } from 'lucide-react'
import ClientSideBar from './ClientSideBar'
import TechnicianImageOne from '../../../images/assessmentImage/CustomerCare.jpg'
// Client Header Component that includes the logo, search bar, and navigation links for the client dashboard.
const ClientHeader = () => {
  return (
    <div className={ClientHeaderStyle.clientHeaderContainer}>
     
      <div className={ClientHeaderStyle.clientNavBar}>
      <h2 className={ClientHeaderStyle  }>Solcon</h2>
      <div className={ClientHeaderStyle.headerInput}>
        <SearchIcon/>
        <input
        className={ClientHeaderStyle.searchInput}
        type="text"
        />
      </div>
      
      <div className={ClientHeaderStyle.firstLink}>
        <li className={ClientHeaderStyle.navBarLinks}><Link to={'/createpost'}>Create</Link></li>
        <img className={ClientHeaderStyle.profilePic} src={TechnicianImageOne} alt='' />
      </div>
     
      </div>
      {/* <div> <ClientSideBar/></div> */}

    </div>
  )
}

export default ClientHeader
