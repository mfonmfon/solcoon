import React from 'react'
import FeedBackStyle from '../../styles/FeedBack.module.css'
const FeedBack = () => {
  return (
    <div className={FeedBackStyle.FeedBackContainer}>
     <div className={FeedBackStyle.content}>
     <h1>Have a Question?</h1>
      <p>Do you have any enquires  or feedback for the team</p>
      <button>Contact Us</button>
     </div>
    </div>
  )
}

export default FeedBack
