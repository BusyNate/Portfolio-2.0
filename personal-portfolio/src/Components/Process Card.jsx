import React from 'react'
import './CSS/WorkFlowCards.css'
import process from '../assets/Icons/Process-Icon.png'
import planning from '../assets/Icons/Design-Icon.png'
import product from '../assets/Icons/Product_Icon.png'
import performance from '../assets/Icons/Performance-Icon.png'


export default function PlanningCard() {
  return (
    <div className='card-container'>
    <article className='card-content'>

        <img src={planning} alt='design icon'></img>


        <h2>1. Planning</h2>
        <p> The planning phase is where technical requirements meet product design in a way that makes the best sense to the user. </p>
        </article>
    </div>

  )


}

export function ProcessCard(){


    return (
        <div className='card-container'>
        <article className='card-content'>
            <img src={process} alt='process icon'></img>
            <h2>2. Process</h2>
            
            <p> The process is where I implement every design spec to create the Minimum Viable Product (MVP), which is then validated by users and tested.</p>
        </article>
        </div>
    )





}

export function ProductCard(){


    return(

        <div className='card-container'>
        <article className='card-content'>
            <img src={product} alt='product icon'></img>
    
            <h2>3. Product</h2>
            <p>The final product evolves from the MVP, integrating feedback and polishing off rough edges before being delivered to the client.</p>
        </article>
        </div>

    )

}

export function PerformanceCard(){


    return (
        <div className='card-container'>
            <article className='card-content'>
                <img src={performance} alt='Performance icon' />
                <h2>4. Performance</h2>
                <p>
                    A performance review is conducted to ensure it met quality standards and deadlines. Insights are documented for future projects.
                </p>
            </article>
        </div>
    );





}