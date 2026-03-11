import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* 3D Particles */}
      <div className="hero-particle"></div>
      <div className="hero-particle"></div>
      <div className="hero-particle"></div>
      <div className="hero-particle"></div>
      <div className="hero-particle"></div>
      <div className="hero-particle"></div>
      
      {/* Floating Circles */}
      <div className="floating-circle floating-circle-1"></div>
      <div className="floating-circle floating-circle-2"></div>
      <div className="floating-circle floating-circle-3"></div>
      
      {/* Content with 3D attributes */}
      <h6 data-text="Crafting Unique Brand Identities">
        Crafting Unique Brand Identities
      </h6>
      
      <h1 data-text="Branding that you need Indeed">
        Branding that you need <span data-text="Indeed">Indeed</span>
      </h1>
      
      <p>
        Elevate your brand with custom identity...
      </p>
      
      <button className="cta-button">
        View My Work
      </button>
    </section>
  );
};

export default Hero;