import React from 'react'
import GetInspiredGridStyle from '../../styles/GetInspiredGrid.module.css'
import BlogPicture from "../../images/heroImages/Blog.jpg"

const GetInspiredGrid = () => {
  return (
    <div className={GetInspiredGridStyle.container}>
       <h1 className={GetInspiredGridStyle.inspiredContentText}>Get insipred by work on Solcon</h1>
      <div className={GetInspiredGridStyle.inspiredContent}>
        <div className={GetInspiredGridStyle.inspiredContentGrid}>
          <img className={GetInspiredGridStyle.getInspiredGridStyle} src={BlogPicture} alt='alt'/>
          <h5>Technical Content</h5>
        </div>

        <div className={GetInspiredGridStyle.inspiredContentGrid}>
          <img className={GetInspiredGridStyle.getInspiredGridStyle} src={BlogPicture} alt='lt'/>
          <h5>Technical Content</h5>
        </div>
        
        <div className={GetInspiredGridStyle.inspiredContentGrid}>
          <img className={GetInspiredGridStyle.getInspiredGridStyle} src={BlogPicture } alt='altt'/>
          <h5>Technical Content</h5>
        </div>
      </div>
    </div>
  )
}

export default GetInspiredGrid
