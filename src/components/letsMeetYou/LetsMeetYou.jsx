import React, { useState } from 'react';
import LetsMeetYouStyle from "../../styles/LetsMeetYou.module.css"
import { DollarSignIcon, Save, SaveIcon, UserIcon } from 'lucide-react';
import MfonPics from '../../images/heroImages/MfonPics.jpg'
const LetsMeetYou = () => {
  const[firstName, setFirstName] = useState("");
  return (
    <div className={LetsMeetYouStyle.SignupContainer}>
    <div className={LetsMeetYouStyle.SignupRightSide}>
      <div className={LetsMeetYouStyle.SignupRightSideContent}>
        <h3 className={LetsMeetYouStyle.firstText}>{`Hey ${firstName} Mfon. Ready for your next big opportunity`}</h3>
       <div className={LetsMeetYouStyle.optionContainer}>
       <div className={LetsMeetYouStyle.options}>
       <UserIcon />
       <h6 className={LetsMeetYouStyle.parText}>{`Answer a few question and start building  your profile`}</h6>
       </div>
       <div className={LetsMeetYouStyle.options}>
       <Save/>
       <h6>{`List services for client to buy`}</h6>
       </div>
       <div className={LetsMeetYouStyle.options}>
       <DollarSignIcon/>
       <h6>{`Get paid safely and know we are there to help`}</h6>
       </div>
       </div>
       <div className={LetsMeetYouStyle.buttonStyle}>
       <button className={LetsMeetYouStyle.btn}>{`Get started`}</button>
       <h5>{`it only take 5-10mins and we'll save as you go`}</h5>
       </div>
      
      </div>
    </div>

    <div className={LetsMeetYouStyle.SignupLeftSide}>
        <div className={LetsMeetYouStyle.SignupContent}>
        
     <div className={LetsMeetYouStyle.SignupText}>
      <p   className={LetsMeetYouStyle.errorMessage ? "errorMessage": "offscreen"} aria-live='assertive'>
        {/* {errorMessage} */}
      </p>

      <img className={LetsMeetYouStyle.mfonImage} src={MfonPics} alt=''/>
      <p className="username">{`Mfon Mfon`}<br/>
        <span>{`Software engineer`}</span>
      </p>
      <p className='description' style={{fontSize:"25px", width:"350px"}}>{`"Solcon has enabled me to increase my rates. 
      I love the feeling of  being able to help a variety of clients" `}</p>
     </div>
    </div>
    </div>
</div>
  )
}

export default LetsMeetYou
