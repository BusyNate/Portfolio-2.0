import React from 'react'
import './CSS/About.css'
export default function Element({aboutInfo}) {
  return (
    <div>
    <div className='Element-card'>
      <img src={aboutInfo.iconSrc} alt='icon'/> 
      <div className='divider'></div>
      <span><p>{aboutInfo.text}</p></span> 
    </div>

    </div>
  )


}
