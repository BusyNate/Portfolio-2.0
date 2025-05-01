import React from 'react'
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
    <img src='./src/assets/Icons/email.svg' alt='email icon'></img>
      <h2><a>nathanmtetwa@gmail.com</a></h2>
      </div>
      )
}

export function LinkedInCard() {
  return (
    <div className='linkedin-card'>
    <img src='./src/assets/Icons/LinkdIn.svg' id='linkedin-icon'></img>
      <h2><a>Nathan Mtetwa</a></h2>
      </div>
      )
}

export function GitHubCard() {
  return (
    <div className='github-card'>
    <img src='./src/assets/Icons/git.svg'></img>
      <h2><a>@BusyNate</a></h2>
      </div>
      )
}

export function CellnumberCard() {
  return (
    <div className='cellnumber-card'>
    <img src='./src/assets/Icons/phone.svg'></img>
      <h2>+27 81 212 2988</h2>
      </div>
      )
}   
