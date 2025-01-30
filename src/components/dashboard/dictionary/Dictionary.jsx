import React, { useState } from 'react'
import DictionaryStyles from '../../../styles/Dictionary.module.css'
import dictionaryDataContent from './dictionaryData'
import { IoSearchSharp } from 'react-icons/io5'
import { SearchCheckIcon } from 'lucide-react'
const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [meaning, setMeaning] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const GEMINI_GOOGLE_APIS_URL_LINKS = 'https://api.gemini.com/v1/search'
  const GEMINI_GOOGLE_APIS_KEY = ''

  const handleDictionarySearch = async (event)=>{
    const terms = searchTerm.toLowerCase()
   try{
    const filterDictionarySearchResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
    const filterDictionaryData = filterDictionarySearchResponse.json();
    if(filterDictionaryData.title === "No Definitions Found"){
      setErrorMessage("No Result Found");
      setMeaning([])
    }else{
      setMeaning(filterDictionaryData[0].meaning);
      setErrorMessage("");
    }
   }catch(event){
    setErrorMessage("No Result Found");
    setMeaning([]);
   }
  }
  return (
    <div className={DictionaryStyles.dictionaryContainer}>
      <div className={DictionaryStyles.dictionaryHeader}>
        <h1 className={DictionaryStyles.dictionaryTitle}>Welcome to Solcon</h1>
        <p className={DictionaryStyles.dictionaryDescription}>Search for to clearify what you really want the technician to do</p>
      </div>

      <div className={DictionaryStyles.dictionaryInput}>
        <input 
        type='search'
        placeholder='Search to clearify what you really want'
        onChange={(event)=>{setSearchTerm(event.target.value)}}
        className={DictionaryStyles.dictionaryInputField}
        />
       <SearchCheckIcon onClick={handleDictionarySearch} className={DictionaryStyles.dictionaryInputIcon} />
  
      </div>

      <div className={DictionaryStyles.dictionaryContent}>
        {dictionaryDataContent.map((direction,index)=>{
          return(
            <div className={DictionaryStyles.dictionaryContentCard} key={index}>
              <span className={DictionaryStyles.dictionaryContentIcon}>{direction.icon}</span>
              <h2 className={DictionaryStyles.dictionaryContentTitle}>{direction.title}</h2>
              <p className={DictionaryStyles.dictionaryContentDescription}>{direction.description}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Dictionary
