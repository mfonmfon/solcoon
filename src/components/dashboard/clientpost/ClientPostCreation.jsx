import React, { useState } from 'react'

const ClientPostCreation = () => {
  const[text, setText] = useState("")
  const[description, setDescription] = useState("")
  const createAt = new Date(Date.now()).getDay().toString()
  return (
    <div>
      <div>
        <form>
          <input type='text' 
          className=""
          name='text'
          onClick={()=>{
            setText()
          }}
          required
          />

          <input type='description'
          className='description'
          name='description'
          onClick={()=>{

          }}
          required 
          />

          <input type='' 
          className=''
          name=''
          required
          />
        </form>
        <div>
          <button></button>
        </div>
      </div>
      
    </div>
  )
}

export default ClientPostCreation
