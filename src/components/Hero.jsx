import React from "react";
import "./Hero.css";
import React from "react";
import waxSeal from "/assets/images/waxSeal.webp"; // use /public folder path
import heroBg from "/assets/images/hero-bg.webp";  // same here
import "../Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <img src={heroBg} alt="Library background" className="hero-bg" />
      <div className="hero-overlay">
        <img src={waxSeal} alt="Wax Seal Logo" className="hero-logo" />
        
        <h1 className="greeting">Welcome, Traveler...</h1>

        <div className="menu-icon" aria-label="Menu Icon">☰</div>
      </div>
    </section>
  );
}

export default Hero;
