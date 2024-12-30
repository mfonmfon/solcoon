import React from 'react'
import AskQuestionStyle from '../../styles/AskQuestion.module.css'
const AskQuestions = () => {
  return (
    <div className={AskQuestionStyle.container}>
      <div className={AskQuestionStyle.contentHeader}>
      <h1>Do You Have Question</h1>
      <p>We'll help connect you to very good technician</p>
      <div className={AskQuestionStyle.contact}>
        <button className={AskQuestionStyle.questionContiner}>Contact</button>
      </div>
    </div>
  </div>
  )
}

export default AskQuestions
