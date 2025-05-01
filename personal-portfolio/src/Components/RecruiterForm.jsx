import React from 'react'
import{useState}  from 'react'
import './CSS/RecruiterForm.css'
import GradientRule from './GradientRule'
import SubmitButton from './SubmitBtn'
export default function RecruiterForm() {



  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')

  function handleSubmit(e) {
  
    e.preventDefault()
    console.log(Name, Email, Message)
    setName('')
    setEmail('')
    setMessage('')

  }

  return (
    <div className='recruiter-form-container'>   
      <form onSubmit={handleSubmit} className='recruiter-form'>
      <h1 id='Hello'>Say Hello!</h1>
      
      <GradientRule/>
    
       
        <label htmlFor="name">*Name:</label>
        
        <input
          id="name"
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">*Email:</label>
     
        <input
          id="email"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">*Message:</label>
       
        <textarea
          id="message"
          value={Message} 
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <SubmitButton/>
      </form>
    </div>
  )
}
