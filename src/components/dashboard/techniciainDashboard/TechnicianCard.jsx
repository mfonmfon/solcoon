import React from 'react'
import TechnicianCardStyle from '../../../styles/TechnicianCards.module.css'
import { TbRating14Plus } from 'react-icons/tb'
import { FcRating } from 'react-icons/fc'
import PictureOne from '../../../images/dashboardimages/PictureOne.jpg'
import PictureTwo from '../../../images/dashboardimages/PictureTwo.jpg'
import PictureThree from '../../../images/dashboardimages/PictureThree.jpg'
import PictureFour from '../../../images/dashboardimages/PictureFour.jpg'
const TechnicianCard = () => {
  return (
    <div className={TechnicianCardStyle.container}>
      <div className={TechnicianCardStyle.cardHeader}>
        <div className={TechnicianCardStyle.subCard}>
          <img className={TechnicianCardStyle.cardImage} src={PictureOne} alt=''/>
         <div className={TechnicianCardStyle.levels}>
         <div>header</div>
         <div><FcRating/><FcRating/><FcRating/> </div>
         </div>
         <p>{`I will be ai technicain full stack developer react.js, php etc`}</p>

          <span>5.0</span>
        </div>

        <div className={TechnicianCardStyle.subCard}>
          <img className={TechnicianCardStyle.cardImage}  src={PictureThree} alt=''/>
          <div className={TechnicianCardStyle.levels}>
         <div>header</div>
         <div><FcRating/><FcRating/><FcRating/> </div>
         </div>
         <p>{`I will be ai technicain full stack developer react.js, php etc`}</p>

          <span>5.0</span>
        </div>

        <div className={TechnicianCardStyle.subCard}>
          <img className={TechnicianCardStyle.cardImage}  src={PictureTwo} alt=''/>
          <div className={TechnicianCardStyle.levels}>
         <div>header</div>
         <div><FcRating/><FcRating/><FcRating/> </div>
         </div>
         <p>{`I will be ai technicain full stack developer react.js, php etc`}</p>

          <span>5.0</span>
        </div>

        <div className={TechnicianCardStyle.subCard}>
          <img className={TechnicianCardStyle.cardImage} src={PictureFour} alt=''/>
          <div className={TechnicianCardStyle.levels}>
         <div>header</div>
         <div><FcRating/><FcRating/><FcRating/> </div>
         </div>
          <p>{`I will be ai technicain full stack developer react.js, php etc`}</p>

          <span>5.0</span>
        </div>
      </div>
    </div>
  ) 
}
export default TechnicianCard
