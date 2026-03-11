import React from 'react';
import './header.css';  // 👈 YAHAN STYLE IMPORT KARO

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Mian Muiz</div>
      <ul className="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <a href="#contact" className="contact-btn">Let's Talk</a>
    </header>
  );
};

export default Header;