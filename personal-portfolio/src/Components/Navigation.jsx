import React from 'react';
import GradientRule from './GradientRule';
import './CSS/Navigation.css'; // Import the CSS file

export default function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <span className="navigation-brand">Nathan</span>
        <ul className="navigation-links">
        <li><a>Home</a></li>
        <li><a>Workflow</a></li>
        <li><a>About Me</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <GradientRule/>
    </>
  );
}