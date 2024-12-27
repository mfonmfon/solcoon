import React from 'react'
import TechniciaanCardStyle from '../../styles/TechnicianCard.module.css'
const TechnicianCard = () => {
  return (
    <div className={TechniciaanCardStyle.technicianContainer}>
      <h2 className={TechniciaanCardStyle.technicianCardText}>{`Technician Services at your`}
         <span>{` fingertips`}</span> </h2>
         <button className={TechniciaanCardStyle
          .TechnicianCardButton}>{`Join Solvas`}</button>
    </div>
  )
}

export default TechnicianCard
