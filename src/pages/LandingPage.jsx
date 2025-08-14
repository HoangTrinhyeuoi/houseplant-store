import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="company-name">GreenLife Plant Store</h1>
          <p className="company-description">
            Welcome to GreenLife, your premier destination for beautiful houseplants. 
            We specialize in bringing nature indoors with our carefully curated selection 
            of plants that will transform your living space into a green oasis. From 
            low-maintenance succulents to stunning flowering plants, we have something 
            for every plant lover.
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;