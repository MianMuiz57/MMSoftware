import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    { 
      id: 1, 
      text: "Muiz transformed our brand identity completely. The packaging design increased our sales significantly!", 
      author: "Alex Chen", 
      title: "CEO of BrewCraft",
      rating: 5
    },
    { 
      id: 2, 
      text: "Incredible attention to detail and a true creative partner. Highly recommend!", 
      author: "Samantha Lee", 
      title: "Founder of Loom",
      rating: 5
    }
  ];

  // Function to render stars
  const renderStars = (rating) => {
    return Array(rating).fill('★').join('');
  };

  return (
    <section className="reviews" id="reviews">
      {/* Decorative quote icons */}
      <div className="quote-icon quote-icon-1">"</div>
      <div className="quote-icon quote-icon-2">"</div>
      
      {/* Testimonial badge */}
      <div className="testimonial-badge">
        ⭐ Trusted by 50+ clients
      </div>
      
      <h2>Client Reviews</h2>
      <p>Real feedback from clients who trusted my design expertise to elevate their brands successfully.</p>
      
      <div className="reviews-grid">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            {/* Star rating */}
            <div className="review-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < review.rating ? '★' : '☆'}</span>
              ))}
            </div>
            
            <p>{review.text}</p>
            <h4>{review.author}</h4>
            <span>{review.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;