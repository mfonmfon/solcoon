import React from 'react'
import ClientSearchInputStyles from '../../../styles/ClientSearchInput.module.css'
import { FcSearch } from 'react-icons/fc'
const ClientSearchInput = () => {
  
  return (
    <div className={ClientSearchInputStyles.searchInputContainer}>
       <div className={ClientSearchInputStyles.searchCardHeader}>
        <div className={ClientSearchInputStyles.searchCard}>
          <input
          type="text" 
          name="search"
          className={ClientSearchInputStyles.searchCardInput}
          placeholder='Search for a service'
          // value={``}
          // onChange={``}
          />
         
        </div>
        <div className={ClientSearchInputStyles.searchCardIcon}>
          <FcSearch size={37}/>
          </div>
       
       </div>
      
    </div>
  )
}

export default ClientSearchInput
