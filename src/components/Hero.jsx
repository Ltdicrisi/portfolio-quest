import React, { useEffect } from "react";
import waxSeal from "../assets/images/waxSeal";
import heroBg from "../assets/images/hero-bg.webp";
import "../Hero.css";
import { initialize, write, FONT_MATRIX } from "khoshnus";
import "khoshnus/style.css";

function Hero() {
    useEffect(() =>{
        initialize();
        write({
            text: "Welcome, Traveler...",
            fontMatrix: FONT_MATRIX.SCRIPTINA,
            size: 80,
            color: "#df21ff", //Matches --color-accent
            elementId: "handwriting",
            strokeWidth: 3,
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