import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    { name: "Webs Design", icon: "🎨", number: "01" },
    { name: "Brand Identity Design", icon: "🏷️", number: "02" },
    { name: "Branding", icon: "✨", number: "03" },
    { name: "Websites Design", icon: "📦", number: "04" },
    { name: "Mockup Design", icon: "🖼️", number: "05" }
  ];

  return (
    <section className="services" id="services">
      {/* Decorative shapes */}
      <div className="decorative-shape decorative-shape-1"></div>
      <div className="decorative-shape decorative-shape-2"></div>
      
      <h2>Services</h2>
      <p>Helping businesses standout with brand identity packaging that captivates and converts effectively.</p>
      
      <ul className="services-list">
        {servicesList.map(service => (
          <li key={service.name}>
            <span className="service-icon">{service.icon}</span>
            <span className="service-number">{service.number}</span>
            {service.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;