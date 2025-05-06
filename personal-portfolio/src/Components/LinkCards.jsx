import React from 'react'
import email from '../assets/Icons/email.svg'
import linkedin from '../assets/Icons/LinkdIn.svg'
import github from '../assets/Icons/git.svg'
import phone from '../assets/Icons/phone.svg'

import './CSS/LinkCards.css'

export default function LinkCards() {
  return (
    <div className='link-cards'>
    <EmailCard/>
    <LinkedInCard/>
    <GitHubCard/>
    <CellnumberCard/>
    </div>
  )
}

export function EmailCard() {
  return (
    <div className='email-card'>
    <img src={email} alt='email icon'></img>
      <h2><a>nathanmtetwa@gmail.com</a></h2>
      </div>
      )
}

export function LinkedInCard() {
  return (
    <div className='linkedin-card'>
    <img src={linkedin} id='linkedin-icon'></img>
      <h2><a href='https://www.linkedin.com/in/manqoba-mtetwa/'>Manqoba Mtetwa</a></h2>
      </div>
      )
}

export function GitHubCard() {
  return (
    <div className='github-card'>
    <img src={github}></img>
      <h2><a href='https://github.com/BusyNate'>@BusyNate</a></h2>
      </div>
      )
}

export function CellnumberCard() {
  return (
    <div className='cellnumber-card'>
    <img src={phone}></img>
      <h2>+27 81 212 2988</h2>
      </div>
      )
}   
