import React from 'react'
import MappingDesignStyle from '../../styles/MappingDesign.module.css'
import MappingImage from '../../images/heroImages/MappingImage.png'
const MappingDesign = () => {
  return (
    <div className={MappingDesignStyle.container}>
      <div className={MappingDesignStyle.rightSider}>
        <div className={MappingDesignStyle.imageContainer}>
          <img src={MappingImage} alt=''/>
          Hello
        </div>

      </div>
      <div className={MappingDesignStyle.leftSider}>
        Hello

      </div>
      
    </div>
  )
}

export default MappingDesign
