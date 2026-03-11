import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      question: "What is your typical design process?", 
      answer: "My process includes Discovery, Ideation, Design, and Delivery phases, ensuring we align at every step." 
    },
    { 
      question: "How long does a branding project take?", 
      answer: "A complete brand identity project typically takes 4-6 weeks, depending on complexity and revision rounds." 
    },
    { 
      question: "Do you offer revisions?", 
      answer: "Yes, revisions are included in all packages to ensure you're 100% satisfied with the final design." 
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      {/* Decorative question marks */}
      <div className="decorative-question decorative-question-1">?</div>
      <div className="decorative-question decorative-question-2">?</div>
      
      {/* Floating dots */}
      <div className="floating-dot floating-dot-1"></div>
      <div className="floating-dot floating-dot-2"></div>
      <div className="floating-dot floating-dot-3"></div>
      
      <h2>Answers</h2>
      <p>Find answers to common questions about my design process, services etc…</p>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;