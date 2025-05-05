import React, { useEffect } from 'react'
import{useState}  from 'react'
import './CSS/RecruiterForm.css'
import GradientRule from './GradientRule'
import SubmitButton from './SubmitBtn'
import emailjs from '@emailjs/browser'

export default function RecruiterForm() {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')
  const [validForm,setvalidForm] = useState(false)

  useEffect(() => {
    if (Name.trim() !== '' && Email.trim() !== '' && Message.trim() !== '') {
      setvalidForm(true);
    } else {
      setvalidForm(false);
    }
  }, [Name, Email, Message]);

  function handleSubmit(e) {
  
    e.preventDefault()
    emailjs.sendForm('service_jpcgo4a', 'template_ekrpsil', e.target, 'tIeaiNFUhq2znYJEW')
    e.target.reset()
    setName('')
    setEmail('')
    setMessage('')

  }

  return (
    <div className='recruiter-form-container'>   
      <form onSubmit={handleSubmit} className='recruiter-form' name='email-from' id='email-from'> 
      <h1 id='Hello'>Say Hello!</h1>
      
      <GradientRule/>
    
       
        <label htmlFor="name">*Name:</label>
        
        <input
          id="name"
          name="name"
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">*Email:</label>
     
        <input
          id="email"
          type="email"
          name="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">*Message:</label>
       
        <textarea
          id="message"
          name="message"
          value={Message} 
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <SubmitButton validForm={validForm}/>
      </form>
    </div>
  )
}
