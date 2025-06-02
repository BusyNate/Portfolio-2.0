import React from 'react';
import Navigation from '../../Components/Navigation';

import './Home.css';
export function Button() {
  return (
    <a
      href="/MN. Mtetwa CV.pdf.pdf" 
      download="Manqoba-N.pdf"
      className="home-cv-button"
    >
      Download CV
    </a>
  );
}
export default function Home({ home }) {
  return (
    <div className="home-container">
      <Navigation />

      <div className="home-content">
        <div className="home-text-section">
          <h1 className="home-title">{home.title}</h1>
          <p className="home-description">
            {home.desr}{' '}
            <span className="home-description-highlight">{home.p}</span>
          </p>
          <Button />
        </div>

        <img
          src={home.img}
          alt="Nathan Mtetwa"
          className="home-image"
        />
      </div>
    </div>
  );
}
