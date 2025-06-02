import React, {useState} from "react";
import "./Hero.css";
import NavDrawer from "./NavDrawer";
import heroImage from "../assets/images/hero-image.png";


function Hero() {
  return (
    <section className="hero-section">
      <img src= {heroImage} alt="Library background" className="hero-bg" />

           {/* Centered Hero Content */}
      <div className="hero-overlay">
  <NavDrawer />
  
  <h2 className="hero-name">Lauren Di Crisi</h2>
 <p className="hero-subtitle">
  Full Stack Developer | AWS Developer & Backend Focused | Translating Real-World Pain Points Into Scalable Tech
</p>


  <h1 className="greeting">
    "I am not afraid of storms, for I am learning how to sail my ship."
  </h1>
  <h3 className="quote-author">— Louisa May Alcott</h3>
</div>


    </section>
  );
}

export default Hero;
