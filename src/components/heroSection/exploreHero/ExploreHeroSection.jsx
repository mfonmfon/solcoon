import React from 'react'
import ExploreHeroSectionstyle from '../../../styles/ExploreHeroSection.module.css'

const ExploreHeroSection = () => {
  return (
    <div className={ExploreHeroSectionstyle.container}>
      <div className={ExploreHeroSectionstyle.content}>
        <h4>Blog</h4>
        <h1 className={ExploreHeroSectionstyle.contentText}>Explore top trends on solar</h1>
        <p>Check all solar trends to be up to date</p>
      </div>
    </div>
  )
}
export default ExploreHeroSection
