import React from 'react'
import './Contact.css'
import RecruiterForm from '../../Components/RecruiterForm'
import LinkCards from '../../Components/LinkCards'
import Navigation from '../../Components/Navigation'
export default function Contact() {
  return (
    <div>
    <Navigation/>
<div className='contact-page'>  

   <h1>Recruiting? Lets get in Touch!</h1>

        <div className='panel'>
            <LinkCards/>
            <br></br>
            <RecruiterForm/>
        </div>

   </div>
</div>
  )
}
