import React, { useState } from 'react';
import './NavDrawer.css'; // You’ll style it here
import menuImage from '../assets/images/menu-icon-wide.webp'; // Use your final chosen image

function NavDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navdrawer-container">
      {/* Menu Button */}
      <button className="menu-button" onClick={toggleDrawer} aria-label="Toggle Menu">
        <img src={menuImage} alt="Menu" className={`menu-img ${isOpen ? 'rotate' : ''}`} />
      </button>

      {/* Drawer Menu */}
      <nav className={`drawer ${isOpen ? 'open' : ''}`}>
        <a href="#about" onClick={toggleDrawer}>About</a>
        <a href="#projects" onClick={toggleDrawer}>Projects</a>
        <a href="#contact" onClick={toggleDrawer}>Contact</a>
      </nav>
    </div>
  );
}

export default NavDrawer;
