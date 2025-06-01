import React, {useState} from "react";
import "./Hero.css";
import NavDrawer from "./NavDrawer";


function Hero() {
  return (
    <section className="hero-section">
      <img src= "/herobg.webp" alt="Library background" className="hero-bg" />

      {/* Wax Seal top Left */}
      <div className="wax-seal-container">
        <img src="/waxforge.webp" alt="Wax Seal Logo" className="hero-logo" />
        </div> 

      {/* Centered Hero Content */}
      <div className="hero-overlay"> 
        <NavDrawer /> 
        <h1 className="greeting">"I am not afraid of storms, for I am learning how to sail my ship."</h1><h3 className="quote-author">— Louisa May Alcott</h3>
      </div>

    </section>
  );
}

export default Hero;
