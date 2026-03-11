import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <section className="process">
      {/* 3D Background Elements */}
      <div className="process-particle"></div>
      <div className="process-particle"></div>
      <div className="process-particle"></div>
      <div className="process-particle"></div>
      <div className="process-particle"></div>
      <div className="process-particle"></div>
      <div className="process-particle"></div>
      <div className="process-particle"></div>
      <div className="process-particle"></div>
      <div className="process-particle"></div>
      <div className="process-particle"></div>
      <div className="process-particle"></div>
      
      {/* Floating Orbs */}
      <div className="process-orb process-orb-1"></div>
      <div className="process-orb process-orb-2"></div>
      <div className="process-orb process-orb-3"></div>
      
      {/* Grid Overlay */}
      <div className="process-grid-overlay"></div>
      
      {/* Decorative Circles */}
      <div className="decorative-circle decorative-circle-1"></div>
      <div className="decorative-circle decorative-circle-2"></div>
      
      <h2 data-text="Our Process">Our Process</h2>
      <p>A systematic approach to bringing your vision to life</p>
      
      <div className="process-grid">
        <div className="process-card">
          <div className="step-number">01</div>
          <h3>Discovery</h3>
          <p>Understanding your goals, audience, and vision through in-depth consultation and research.</p>
        </div>
        
        <div className="process-card">
          <div className="step-number">02</div>
          <h3>Strategy</h3>
          <p>Creating a roadmap that aligns with your objectives and sets the foundation for success.</p>
        </div>
        
        <div className="process-card">
          <div className="step-number">03</div>
          <h3>Design</h3>
          <p>Crafting beautiful, functional designs that capture your brand essence and engage users.</p>
        </div>
        
        <div className="process-card">
          <div className="step-number">04</div>
          <h3>Delivery</h3>
          <p>Launching your project with precision and providing ongoing support for continued growth.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;