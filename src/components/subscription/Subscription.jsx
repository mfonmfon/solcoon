import React from 'react'
import SubscriptionStyle from '../../styles/Subscription.module.css'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
const Subscription = () => {
  return (
    <div className={SubscriptionStyle.logincontainer}>
    <div className={SubscriptionStyle.loginleft}>
      <div className={SubscriptionStyle.logo}>
      <p className={SubscriptionStyle.logoSpan}>Sol
        <span>
        con
        </span>
      </p>
      </div>
     <div className={SubscriptionStyle.loginLeftSideContent}>
     <h1 className={SubscriptionStyle.leftSideTextHeader}> Premium</h1>
      <p className={SubscriptionStyle.leftSideParagraph}></p>
      <button className={SubscriptionStyle.leftSideButton}>SHOW ME MY ACTIVITIES MOVES →</button>
     </div>
    </div>
    <div className={SubscriptionStyle.loginright}>
      <div className={SubscriptionStyle.loginRightSideContent}>
      <h2 className={SubscriptionStyle.loginHeaderText}>Subscribe here</h2>
      <h2 className={SubscriptionStyle.loginRightParagraphTextOne}>Subscribe to the premium </h2>
      <form onSubmit={``} className={SubscriptionStyle.formgroup}>
        <div className={SubscriptionStyle.loginform}>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            // value={loginFormData}
            // onChange={``}
            required
          />
        </div>
        <div className={SubscriptionStyle.loginform}>
          <input
            type="cardNumber"
            id="000 000 000 "
            placeholder="Password"
            // value={loginFormData}
            // onChange={``}
            required
          />
        </div>

        <div>
          <input 
          type='date'
          name='startDate'
          placeholder='start Date'
          />
        </div>

        <div>
          <input 
          type='date'
          name='endDate'
          placeholder='end Date'
          />
        </div>

        <div>
  <select
    className={SubscriptionStyle.subscriptionDropdown}
    name="subscriptionType"
    defaultValue=""
    aria-label="Select subscription type"
  >
    <option value="Select subscription type" disabled>
      
    </option>
    <option value="Monthly">Monthly</option>
      <option value="Yearly">Yearly</option>
    </select>
  </div>
       <div>
       <button  onClick={``} className={SubscriptionStyle.Button}>Subscribe</button>
       </div>
      </form>
      </div>
    </div>
    <ToastContainer/>
  </div>
  )
}

export default Subscription
