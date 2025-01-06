import React, {useState} from 'react'
import CreateReviewStyles from '../../../styles/CreateReviews.module.css'
const ClientReviewCreation = () => {
  const createdAt = new Date().getDay().toString();
  const [formData, setFormData] = useState()
  return (
    <div className={CreateReviewStyles}>
      <div >
        <div>
          <form>
            <input type='range'
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
