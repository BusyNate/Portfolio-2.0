import React from 'react'
import './CSS/WorkFlowCards.css'
export default function PlanningCard() {
  return (
    <div className='card-container'>
    <article className='card-content'>

        <img src='./src/assets/Icons/Design Icon.png' alt='design icon'></img>


        <h2>1. Planning</h2>
        <p> The planning phase is where technical requirements meet product design in a way that makes best sense to the user. All detail will I map out meticously to ensure the end product is not compromised</p>
        </article>
    </div>

  )


}

export function ProcessCard(){


    return(

        <div className='card-container'>
        <article className='card-content'>
    
            <img src='./src/assets/Icons/process Icon.png' alt='process icon'></img>
    
            
    
    
            <h2 >2. Process</h2>
            <p> The process is where I roll up my sleeves and put my hands where every design specification is ticked off the list one by one to create the MVP - Minimum Viable Product. The prototype is then handed over for validation & User Acceptance Testing.</p>
            </article>
        </div>


    )





}

export function ProductCard(){


    return(

        <div className='card-container'>
        <article className='card-content'>
            <img src='./src/assets/Icons/Product Icon.png' alt='product icon'></img>
    
            <h2 >3. Product</h2>
            <p > The product is a result of the continuous and incremental evolution of the MVP. All rough edges are polished off, and the feedback is integrated. Thereafter, the product is presented and handed over to the satisifed client </p>
            </article>
        </div>


    )

}

export function PerformanceCard(){


    return(

        <div className='card-container'>
        <article className='card-content'>
    
            <img src='./src/assets/Icons/Performance Icon.png' alt='Performance icon'></img>
    
            <h2 >4. Performance</h2>
            <p>Finally a performance review is conducted to ensure quality standards were met, project deadlines were adhered to and personal recommendations to myself are recorded to improve efficiency for the next product.</p>
            </article>
        </div>


    )





}