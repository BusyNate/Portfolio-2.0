import React from 'react'
import './CSS/Button.css'
export default function SubmitButton() {
  return (
    <div className='submit-button'>

    <button type='submit'>
        Submit
        <img src='./src/assets/Icons/Paper Plane.svg' alt='send'></img>
    </button>

    </div>
  )
}
