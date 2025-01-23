import React from 'react'
import Styles from '../../../styles/Earnings.module.css'
import { FolderIcon } from 'lucide-react'

const Earnings = () => {
  return (
    <div className={Styles.container}> 
      <h1 className={Styles.title}>Billings & Earnings</h1>
      <p>Date Range: February 1, 2024, to January 16, 2025</p> 
        <p className={Styles.message}>There are no earnings to display for the selected date range.If you believe this is a mistake, please contact customer support.</p>
            <button className={Styles.contactbutton}>Contact customer support</button> 
      <div className={Styles.downloadsection}> 
        <button className={Styles.downloadbutton} disabled>Download CSV</button>
       </div> 
       <div className={Styles.tabs}> 
    <ul> 
      <li className={Styles.selected}>Billings & Earnings</li> 
    <li>Lifetime Billed</li>
    </ul>
    </div> 
  </div>
  )
}

export default Earnings
