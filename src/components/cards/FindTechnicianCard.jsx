import React from 'react'
import FindTechnicianCardStyle from '../../styles/FindTechnicianCard.module.css'

const FindTechnicianCard = () => {
  return (
    <div className={FindTechnicianCardStyle.container}>
      
       <div className={FindTechnicianCardStyle.headerContent}>
       <h1>{`Find technician your way`}</h1>
        <p>{`Work with the largest network of independent professional
         technician and get things done from quick turnarrounds to big transformation`}</p> 
       </div>
     <div className={FindTechnicianCardStyle.allCard}>
     <div className={FindTechnicianCardStyle.cards}>
        <h2>{`Post an issue and hire a pro`}</h2>    
        <p>{"Technician"}</p>
      </div>

      <div className={FindTechnicianCardStyle.cards}>
        <h2>{`Browse and buy solar systems`}</h2>
        <p>{"Solar Catalog"}</p>
      </div>

      <div className={FindTechnicianCardStyle.cards}>
        <h2>{`Get advice from industry expert`}</h2>
        <p>{"Consultations"}</p>
      </div>
     </div>
    </div>
  )
}

export default FindTechnicianCard
