import React from 'react'
import GradientRule from './GradientRule'
import './CSS/Article.css'



export default function ProjectCard( {article}) {

  return (

   <div className='Card'>
    <div className='img-container'>
        <img src={article.img} alt='project image'></img>
    </div>
        <div className='content'>
            <header> <h3>{article.title}</h3>
            <img src={article.icon}alt='icon' className='icon'></img>
            </header>
            <GradientRule/>
            <p>{article.body}</p>
            <button className='visit-button' onClick={() => window.open(article.link, '_blank')}>
            <p>Visit</p>
            <img src='./src/assets/Icons/visit.svg' alt='visit icon'></img>

            </button>

        </div>







   </div>
  )
}
