import React from 'react';
import Navigation from '../../Components/Navigation';
import home from '../../assets/Me.png'
import './Home.css'; // Import the CSS file

export function Button() {
  return (
    <button className="home-cv-button">
      Download CV
    </button>
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
