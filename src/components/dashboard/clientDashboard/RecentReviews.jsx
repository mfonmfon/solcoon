import React from 'react'
import RecentPostStyle from '../../../styles/RecentPost.module.css'
import clientPost from '../../../components/dashboard/clientpost/clientPosts.json'
import { ThumbsDownIcon, ThumbsUpIcon, VerifiedIcon } from 'lucide-react'
import clientReviewsData from '../../../components/dashboard/clientDashboard/clientReviews.json'
import RecentReviewStyle from '../../../styles/RecentReviews.module.css'

const RecentReviews = () => {
  return (
    <div className={RecentReviewStyle.container}>
      <div className={RecentReviewStyle.header}>
      <h1>Reviews from other client</h1>
      </div>
      <div className={RecentReviewStyle.reviewCard}>
        {clientReviewsData.map((reviews, index)=>(
          <div key={index} className={RecentReviewStyle.split}>
           <div className={RecentReviewStyle.timeStamp}>
           <p><span>{reviews.reviewTime}</span></p>
           </div>
            <div>
            <p>{reviews.reviewDescriptions}</p>
            </div>
            <div>
            <span>{reviews.reviewCount}</span>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}
export default RecentReviews
