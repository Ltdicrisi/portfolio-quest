import React, { useEffect } from "react";
import waxSeal from "../assets/images/waxSeal.webp";
import heroBg from "../assets/images/hero-bg.webp";
import "./Hero.css";
import { initialize, write, FONT_MATRIX } from "khoshnus";
import "khoshnus/style.css";

function Hero() {
useEffect(() => {
  const pen = new Manuscript({
    svgId: "handwriting",
    fontMatrix: "SCRIPTINA"  // Optional here; move to write config if needed
  });

  pen.write("Welcome, Traveler...", {
    fontMatrix: "SCRIPTINA",  // Only if needed
    size: 80,
    color: "#df21ff",
    strokeWidth: 3
  });
}, []);


    return (
    <section className="hero-section">
      <img src={heroBg} alt="Library background" className="hero-bg" />
      <div className="hero-overlay">
        <img src={waxSeal} alt="Wax Seal Logo" className="hero-logo" />

        {/* 🔮 Animated text target */}
        <div id="handwriting" className="handwritten-svg"></div>

        {/* ☰ Icon for future bookmark menu */}
        <div className="menu-icon" aria-label="Menu Icon">☰</div>
      </div>
    </section>
  );
}

export default Hero;