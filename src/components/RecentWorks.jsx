import React from 'react';
import './RecentWorks.css';

const RecentWorks = () => {
  const works = [
    { 
      id: 1, 
      title: "Project Alpha", 
      category: "Brand Identity",
      tags: ["Branding", "Identity", "2024"],
      description: "Complete brand identity design including logo, stationery, and guidelines."
    },
    { 
      id: 2, 
      title: "Project Beta", 
      category: "Packaging Design",
      tags: ["Packaging", "3D", "Print"],
      description: "Luxury packaging design for premium product line."
    },
    { 
      id: 3, 
      title: "Project Gamma", 
      category: "UX Design",
      tags: ["UI/UX", "Mobile", "Web"],
      description: "User experience design for mobile application."
    },
  ];

  return (
    <section className="recent-works" id="work">
      {/* Floating particles */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      
      <h2>Recent Works</h2>
      <div className="works-grid">
        {works.map(work => (
          <div key={work.id} className="work-item">
            <div className="work-image-placeholder"></div>
            
            {/* Overlay on hover */}
            <div className="work-overlay">
              <span>View Project</span>
              <p>{work.description}</p>
              <button className="view-project">See Details →</button>
            </div>
            
            <h3>{work.title}</h3>
            <p>{work.category}</p>
            
            {/* Optional tags */}
            <div className="work-tags">
              {work.tags.map(tag => (
                <span key={tag} className="work-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;