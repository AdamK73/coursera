import React from "react";

const CustomersSay = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial">
          <img
            src="https://via.placeholder.com/100x100.png?text=Customer+1"
            alt="Customer 1"
          />
          <p>"Great food and fantastic service!"</p>
        </div>
        <div className="testimonial">
          <img
            src="https://via.placeholder.com/100x100.png?text=Customer+2"
            alt="Customer 2"
          />
          <p>"A wonderful dining experience."</p>
        </div>
        <div className="testimonial">
          <img
            src="https://via.placeholder.com/100x100.png?text=Customer+3"
            alt="Customer 3"
          />
          <p>"Highly recommend Little Lemon."</p>
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
