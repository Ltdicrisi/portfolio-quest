import React, {useState} from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <img src= "/herobg.webp" alt="Library background" className="hero-bg" />

      {/* Wax Seal top Left */}
      <div className="wax-seal-container">
        <img src="/waxforge.webp" alt="Wax Seal Logo" className="hero-logo" />

      {/* Menu Icon Top Right */}
    <div className="menu-icon" onClick={()=> setMenuOpen(!isMenuOpen)} aria-label="Menu Icon">☰</div>
      </div> 

      {/* Centered Hero Content */}
      <div className="hero-overlay">  
        <h1 className="greeting">"I am not afraid of storms, for I am learning how to sail my ship."</h1><h3 className="quote-author">— Louisa May Alcott</h3>
      </div>

    {/* Drawer Menu */}
      {isMenuOpen && (
        <nav className="hero-nav-drawer">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      )}
    </section>
  );
}

export default Hero;
