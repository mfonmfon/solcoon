import React from 'react'
import AskQuestionStyle from '../../styles/AskQuestion.module.css'
import { askQuestionsData } from '../header/AppData'
import { RxDropdownMenu } from 'react-icons/rx'

const AskQuestions = () => {
  
  return (
    <div className={AskQuestionStyle.container}>
      <h2>Frequently Asked Questions (FAQs)</h2>
    <div className={AskQuestionStyle.splitHeader}>
      <ul className={AskQuestionStyle.tagList}>
        {askQuestionsData.map((data, index)=>(
          <div className={AskQuestionStyle.questionSpit}>
            <li key={index} className={AskQuestionStyle.listItems}>
            <h1>{data.text}</h1>
            <span>{data.menubar}</span>
          </li>
          </div>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default AskQuestions
