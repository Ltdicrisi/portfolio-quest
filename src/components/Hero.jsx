import React from "react";
import waxSeal from "../assets/images/waxSeal";

function Hero() {
    return(
    <div className="hero">
        <img src={waxSeal} alt="Wax Seal Logo"/>
        <h1 className="greeting">Welcome, Traveler...</h1>
    <div className="menu-icon" alt="Menu Icon">=</div>
    </div>
    )
};

export default Hero;