import React from 'react'
import Navigation from '../../Components/Navigation'
import PlanningCard from '../../Components/Process Card'
import { ProcessCard, ProductCard, PerformanceCard } from '../../Components/Process Card'
import GradientRule from '../../Components/GradientRule'
export default function WorkFlow() {
  return (
    <div style={{padding:'20px'}}>
    <Navigation/>

        <div style={{display:'flex',justifyContent:'center' ,alignItems:'flex-start', gap:'20px', padding:'30px'}}>
        <div style={{display:'flex', width:'85%', justifyContent:'space-between', flexDirection:'column', gap:'100px'}}>
            <h1 style={{fontSize:'70px', color:'rgb(230, 231, 231)'}}> My Tried & Tested WorkFlow</h1>
            
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                <p style={{color:'rgba(218,226,227,1)', fontSize:'20px',}}>
                  <GradientRule/>
                    To every master architect, developer and designer, an established methodolody is employed to achieve the deepest level of flow-state as to yield maximal results. Here lies a High-Level overview of my strategic workflow I haved used to implement & complete projects.  <br></br><br></br> 
                  <GradientRule/>
                </p>
            </div>
        </div>

        <div style={{display:'flex',  flexWrap:'wrap', gap:'25px', justifyContent:'space-evenly',}}>
        <PlanningCard />
        <ProcessCard/>
        <ProductCard/>
        <PerformanceCard/>
        </div>

        </div>
    </div>
  )
}
