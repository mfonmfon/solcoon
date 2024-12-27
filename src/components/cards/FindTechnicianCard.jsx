import React from 'react'
import FindTechnicianCardStyle from '../../styles/FindTechnicianCard.module.css'

const FindTechnicianCard = () => {
  return (
    <div className={FindTechnicianCardStyle.container}>
      <div className={FindTechnicianCardStyle}>
        <h1>{`Find technician your way`}</h1>
        <p>{`Work with the largest network of independent professional
         technician and get things done from quick turnarrounds to big transformation`}</p>
      </div>
      <div className={FindTechnicianCardStyle.cards}>
        <h2>{`Hire a technician`}</h2>
        <p>{"Client"}</p>
      </div>

      <div className={FindTechnicianCardStyle.cards}>
        <h2>{`Hire a technician`}</h2>
        <p>{"Client"}</p>
      </div>

      <div className={FindTechnicianCardStyle.cards}>
        <h2>{`Hire a technician`}</h2>
        <p>{"Client"}</p>
      </div>
    </div>
  )
}

export default FindTechnicianCard
