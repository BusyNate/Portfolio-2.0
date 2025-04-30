import React from 'react'
import Navigation from '../../Components/Navigation'
import PlanningCard from '../../Components/Process Card'
import { ProcessCard, ProductCard, PerformanceCard } from '../../Components/Process Card'

export default function WorkFlow() {
  return (
    <div style={{padding:'20px'}}>
    <Navigation/>

        <div style={{display:'flex',justifyContent:'center' ,alignItems:'flex-start', gap:'20px', padding:'30px', border:'1px solid red'}}>
        <div style={{display:'flex', width:'92%', justifyContent:'space-around',border:'1px solid white', flexDirection:'column',}}>
            <h1 > My Tried & Tested WorkFlow</h1>
            
            <div>
                <p>
            
                    To every master architect, developer and designer, an established methodolody is employed to achieve the deepest level of flow-state as to yield maximal results. Here lies a High-Level overview of my strategic workflow I haved used to implement & complete projects.   
                </p>
            </div>
        </div>

        <div style={{display:'flex',  flexWrap:'wrap', gap:'25px', border:'1px solid white', justifyContent:'space-evenly'}}>
        <PlanningCard />
        <ProcessCard/>
        <ProductCard/>
        <PerformanceCard/>
        </div>

        </div>
    </div>
  )
}
