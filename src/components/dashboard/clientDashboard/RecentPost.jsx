import React from 'react'
import RecentPostStyle from '../../../styles/RecentPost.module.css'
import clientPost from '../../../components/dashboard/clientpost/clientPosts.json'
import { ThumbsDownIcon, ThumbsUpIcon, VerifiedIcon } from 'lucide-react'

const RecentPost = () => {
  return (
    <div className={RecentPostStyle.container}>
      <div className={RecentPostStyle.recentPostContent}>
        <h1 className={RecentPostStyle}>Top Posts From Clients</h1>
        {clientPost.map((recentPostData, index)=>{
          return(
            <div key={index} className={RecentPostStyle.recentPostCard}>
              <div className={RecentPostStyle.timeDate}>
              <span className={RecentPostStyle.timePosted}>{recentPostData.timestamp}</span>
              </div>

              <div className={RecentPostStyle.title}>
                <h2 className={RecentPostStyle.postHeader}>{recentPostData.problemType}</h2>
               <div className={RecentPostStyle.icons}>
               <ThumbsDownIcon size={15}  onClick={()=>{

               }} /> 
               <ThumbsUpIcon size={15} onClick={()=>{

               }}/>
               </div>
              </div>

              <div className={RecentPostStyle.priceHeader}>
                <span className={RecentPostStyle.price} style={{color: "gray", fontSize: 9}}>{`Fixed price ${recentPostData.fixedPrice}`}</span>
              </div>

              <div className={RecentPostStyle.descriptionHeader}>
                <p className={RecentPostStyle.postDescription}>{recentPostData.problemDescription}</p>
              </div>

              <div className={RecentPostStyle.categoryHeader}>
                <ul>
                 <li  className={RecentPostStyle}>{recentPostData.categoryOne}</li>
                 <li  className={RecentPostStyle}>{recentPostData.categoryTwo}</li>
                 <li  className={RecentPostStyle}>{recentPostData.categoryThree}</li>
                 <li  className={RecentPostStyle}>{recentPostData.categoryFour}</li>
                </ul>
              </div>
              
              <div className={RecentPostStyle.paymentHeader}>
                <p className={RecentPostStyle.payment}>{recentPostData.Payment}</p>
                <VerifiedIcon size={13} color='rgb(65, 79, 237)'/>
              </div>
            </div>
          )
        })}
       </div>
    </div>
  )
}
export default RecentPost
