import React from 'react'
import Styles from '../../../styles/Earnings.module.css'
import { FolderArchiveIcon, FolderHeartIcon, FolderIcon } from 'lucide-react'
import {Link} from 'react-router-dom'
import earningData from '../../../components/dashboard/earnings/EarningData'
import { PiFolderLockThin } from 'react-icons/pi'
import { colors } from '@mui/material'

const Earnings = () => {
  return (
    <div className={Styles.earningContainer}> 
    <div className={Styles.contentHeader}>
      <div className={Styles.billingText}>
        <h1 className={Styles.billingTitle}>Billing & Earnings </h1>
        <p className={Styles.billingDesc}>View your earning and any applicable fees or taxes by clients 
          for the past 3 years for earning past three years go t
          <Link>Transaction Hisstory</Link>
           </p>
      </div>
      <div className={Styles.billingItems}>
        {earningData.map((billing, index)=>{
          return(
            <div className={Styles.billingHeader}>
              <li key={index} className={Styles.billingItemList}>
                <Link to={billing.path}>{billing.text}</Link>
              </li>
            </div>
          )
        })}
      </div>

      <div className={Styles.inputHeader}>
       <div className={Styles.inputContainer}>
       <input 
        type="date"
        className={Styles.dateInput}
        placeholder="Select Date"
        />
       </div>

        <div className={Styles.DownloadbuttonContainer}>
        <button className={Styles.downloadCsvButton}>DOWNLOAD CSV</button>
        </div>
      </div>
    </div>
    <div className={Styles.earningTable}>
       
        <PiFolderLockThin size={59} color='#000000FF'/>
        <h4 className={Styles.earningTableText}>There are no earning to be displayed for the selected data range</h4>
        <p className={Styles.earningTableParagraphText}>If you beleive this is a mistake, please contact customer support</p>
     
       
        <div className={Styles}>
        <button className={Styles.contactButton}>Contact customer support</button>
        </div>
      </div>
      
  </div>
  )
}

export default Earnings
