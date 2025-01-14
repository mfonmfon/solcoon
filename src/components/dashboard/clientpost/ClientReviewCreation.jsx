import React, {useState} from 'react'
import CreateReviewStyles from '../../../styles/CreateReviews.module.css'
// import {FiveStarRatingIcon} from 'react-icons'
const ClientReviewCreation = () => {
  const createdAt = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate();
  const [formData, setFormData] = useState({
    reviewCount: 0,
    reviewText: '',
    createdAt: createdAt
  })
  return (
    <div className={CreateReviewStyles}>
      <div >
        <div>
          <form> 
            {/* <FiveStarRatingIcon/>  */}
            <input type=''
            className='reviewCount'
            placeholder='reviews count'
            name='range'
            onClick={()=>{

            }}
            />
            <input type='description' 
            className='reviewDescription'
            name='description'
            placeholder='description'
            onClick={()=>{

            }}
            />
            <h4>{createdAt}</h4>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ClientReviewCreation
