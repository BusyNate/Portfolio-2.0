import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import GradientRule from './GradientRule';
import './CSS/Navigation.css'; // Import the CSS file

export default function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <img src={logo} alt='logo' width={250}></img>
        <ul className="navigation-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/workflow">Workflow</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <GradientRule/>
    </>
  );
}