import React from 'react'
import MappingDesignStyle from '../../styles/MappingDesign.module.css'
import MapImage from '../../images/heroImages/MapImage.png'
import Mfon from '../../images/heroImages/MfonPics.jpg'
const MappingDesign = () => {
  return (
    <div className={MappingDesignStyle.container}>
      <div className={MappingDesignStyle.rightSider}>
        <div className={MappingDesignStyle.firstCardContainer}>
          <h1>Get  Onboarded in Four Easy Steps</h1>
          <p>Follow these four steps to join as a technician on solcon right away.</p>
        </div>

      </div>
      <div className={MappingDesignStyle.leftSider}>
        <div className={MappingDesignStyle.leftSideGridContent}>
          <div className={MappingDesignStyle.gridContent}>
            <span>1</span>
            <h4>Create an Account</h4>  
            <p>Sign up with  your first name, last name, email, and your location</p>
          </div>

          <div className={MappingDesignStyle.gridContent}>
            <span>2</span>
            <h4>Take Assessment</h4>  
            <p>Sign up with  your first name, last name, email, and your location</p>
          </div>

          <div className={MappingDesignStyle.gridContent}>
            <span>3</span>
            <h4>Create an Account</h4>  
            <p>Sign up with  your first name, last name, email, and your location</p>
          </div>

          <div className={MappingDesignStyle.gridContent}>
            <span>4</span>
            <h4>Create an Account</h4>  
            <p>Sign up with  your first name, last name, email, and your location</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default MappingDesign
