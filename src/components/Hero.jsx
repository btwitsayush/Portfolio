import React from 'react'
import '../styles/Hero.css'
import profileImage from '../assets/images/profile.jpeg'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content-wrapper">
        <div className="hero-left">
          <h1 className="hero-title mb-3">Hi, I'm Ayush Srivastava</h1>
          <p className="hero-subtitle mb-2">Computer Science Student & SDE Intern</p>
          <p className="hero-description mb-4">Crafting impactful software and solving real-world problems</p>
          <div className="button-wrapper">
            <button className="hero-button">Download My Resume</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;