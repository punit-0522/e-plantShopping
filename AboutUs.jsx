import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <h1>Paradise Nursery 🌿</h1>
      <p>Welcome to the best plant shop!</p>

      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default AboutUs;
