import React from 'react'
import MappingDesignStyle from '../../styles/MappingDesign.module.css'
import MapImage from '../../images/heroImages/MapImage.png'
const MappingDesign = () => {
  return (
    <div className={MappingDesignStyle.container}>
      <div className={MappingDesignStyle.rightSider}>
        <div className={MappingDesignStyle.imageContainer}>
          <img className={MappingDesignStyle.image} src={MapImage} alt=''/>
        </div>

      </div>
      <div className={MappingDesignStyle.leftSider}>
        <div className={MappingDesignStyle.leftSideContent}>
          <h3>{`Enterprise Suite`}</h3>
          <h2>{`This is how good solar companies find good technicians `}</h2>
          <p>{`Access the top 1% technicin talent on Solcon, and good solar stores management tools. 
          This is how innovation works`}</p>
        </div>
      </div>
    </div>
  )
}

export default MappingDesign
