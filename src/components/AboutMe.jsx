import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="decorative-line decorative-line-1"></div>
  <div className="decorative-line decorative-line-2"></div>
  <div className="decorative-dots decorative-dots-1"></div>
  <div className="decorative-dots decorative-dots-2"></div>
      <h2>Meet Muiz</h2>
      <p>I'm Muiz, a passionate Web developer and Designer based in Pakistan. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.</p>
      <div className="skills">
        <span>Webs Design</span>
        <span>Brand Identity Design</span>
        <span>UX Design</span>
        <span>Branding</span>
        <span>websites Design</span>
        <span>Figma</span>
        <span>Photoshop</span>
        <div className="about-stats">
  <div className="stat-item">
    <span className="stat-number">5+</span>
    <span className="stat-label">Years Experience</span>
  </div>
  <div className="stat-item">
    <span className="stat-number">100+</span>
    <span className="stat-label">Projects Done</span>
  </div>
  <div className="stat-item">
    <span className="stat-number">50+</span>
    <span className="stat-label">Happy Clients</span>
  </div>
</div>
      </div>
    </section>
  );
};

export default AboutMe;