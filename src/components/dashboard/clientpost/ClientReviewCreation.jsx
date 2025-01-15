import React, {useState} from 'react'
import CreateReviewStyles from '../../../styles/CreateReviews.module.css'
import { FcRatings } from 'react-icons/fc';
import { StarsIcon } from 'lucide-react';
import { Rating } from 'react-simple-star-rating';
const ClientReviewCreation = () => {
  const createdAt = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate();
  const [formData, setFormData] = useState({
    reviewCount: 0,
    reviewText: '',
    rating:0,
  });


  const handleClientReviewChange = (event)=>{
    const {name, value} = event.target.value;
    setFormData({...formData, [name]: value});
  }
  const handleClientReviewSubmit = async (event)=>{
    event.preventDefault();
    console.log(formData);

    try{
      const reviewResponse = await fetch('',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData),
      });
      if(reviewResponse.status === 200){
        console.log('Review created successfully', reviewResponse.status);
        alert('Review created successfully')
      }else{
        console.log('Error creating review', reviewResponse.status);
        alert('Error creating review')
      }
    }catch(error){
      console.log('Error creating review', error);
      alert.error('Error creating review')
    }
  }
  return (
    <div className={CreateReviewStyles.createReviewContainer}>
      <div className={CreateReviewStyles.createReviewHeader}>
        <form onSubmit={handleClientReviewSubmit} className={CreateReviewStyles.createReviewForm}>
         <div className={CreateReviewStyles.reviewDescriptions}>
         <textarea
         className={CreateReviewStyles.review}
         name='reviewDescription'
         placeholder='Write a review'
         value={``}
         onChange={(e) => setFormData({...formData, reviewText: e.target.value })}
         />
         </div>
          <div>
            <label>Rating:</label>
            <Rating
            onClick={``}
            transition
            label
            size={17}
            fillColor='yellow'
            emptyColor='grey'
            ratingValue={``}
            />
          </div>

          {/* <button className={CreateReviewStyles.createReviewButton} type='submit'>Submit</button> */}

        </form>
    </div>
    </div>
  )
}

export const ReviewLists =({reviews})=>{
  return(
    <>
    <div>
      {reviews.length === 0?(
        <p>No reviews yet</p>
      ):(
        reviews.map((review, index)=>(
          <div key={index} className={CreateReviewStyles.review}>
            <p>{review.reviewText}</p>
            <p>{review.rating}</p>
            <p>{review.createdAt}</p>
          </div>
        ))
      )}

    </div>
    </>
  )
}

export default ClientReviewCreation
