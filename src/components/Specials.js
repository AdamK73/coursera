import React from "react";

const Specials = () => {
  return (
    <section className="specials">
      <h2>Our Specials</h2>
      <div className="specials-grid">
        <div className="special-item">
          <img
            src="https://via.placeholder.com/300x200.png?text=Special+1"
            alt="Special 1"
          />
          <p>Special 1 description</p>
        </div>
        <div className="special-item">
          <img
            src="https://via.placeholder.com/300x200.png?text=Special+2"
            alt="Special 2"
          />
          <p>Special 2 description</p>
        </div>
        <div className="special-item">
          <img
            src="https://via.placeholder.com/300x200.png?text=Special+3"
            alt="Special 3"
          />
          <p>Special 3 description</p>
        </div>
      </div>
    </section>
  );
};

export default Specials;
