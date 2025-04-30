import React from 'react'
import GradientRule from './GradientRule'
export default function Navigation() {
  return (<>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <span style={{ padding: '20px',color:'rgba(218,226,227,1' }}>Nathan</span>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '35px', padding: '0', marginRight: '10px',color:'rgba(218,226,227,1' }}>
        <li><a>Home</a></li>
        <li><a>Workflow</a></li>
        <li><a>About Me</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <GradientRule/>
  </>
  )
}