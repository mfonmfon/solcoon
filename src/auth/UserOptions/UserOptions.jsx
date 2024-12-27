import React from 'react'
import UserOptionStyle from '../../styles/UserOptions.module.css'
import { SearchCheck, SearchIcon, User2Icon, UserCircleIcon, UserIcon, UsersIcon} from 'lucide-react'
import { PiUserCircleDashedBold } from 'react-icons/pi'
import { FaUsersViewfinder } from 'react-icons/fa6'
import Signup from '../../auth/signup/Signup'
import {Link} from 'react-router-dom'
const UserOptions = () => {
  const logo = "Solvas"
  const optionHeaderText = "Join as a client or technician"

  return (
    <div className={UserOptionStyle.container}>
     <div className={UserOptionStyle.logo}>
        <h1 className={UserOptionStyle.logoText}>{`${logo}`}</h1>
    </div>

    <div className={UserOptionStyle.content}>
      <h3>{`Join as a client or technician`}</h3>

      <div className={UserOptionStyle.contentSub}>
        <div className={UserOptionStyle.optionCard}>

        <UserIcon style={{ marginTop:"10px"}}/>
          <input  style={{marginLeft:"95px", marginBottom:"20px"}}
           type='radio' name='option' 
           className={UserOptionStyle}/>
          <p style={{fontSize:"18px", width:"60%", 
            marginTop:"5px", 
            fontWeight:"500"}}>{`I'm  client hiring for technician`}</p>
        </div>

        <div className={UserOptionStyle.optionCard}>
          <UserIcon style={{ marginTop:"10px"}}/>
           <input id='option'  style={{marginLeft:"95px", marginBottom:"20px"}} 
           type='radio' name='option' 
           className={UserOptionStyle} />
          <p style={{fontSize:"18px", width:"89%", marginTop:"5px",
             marginLeft:"10px", fontWeight:"500"}}>{`I'm a technician looking for work`}</p>
        </div>
      </div>
      <div className={UserOptionStyle.buttonContainer}>
        <div className='buttonOption'>
        {/* '/join' */}
          <button className={UserOptionStyle.btnOne}>
           <a  href={'/join'}>Create Account</a></button>
         <p className={UserOptionStyle.account}>
          Already have a new account ?
          <a href={'/login'}>{`Login`}</a>
         </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserOptions

