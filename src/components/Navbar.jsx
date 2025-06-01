import "./Navbar.css";
import aboutIcon from "../assets/icons/id-card.png";
import projectIcon from "../assets/icons/project.png";
import contactIcon from "../assets/icons/email.png";
import homeIcon from "../assets/icons/house.png";

export default function Navbar() {
    return (
        <nav className="navbar">
        <ul className="nav-list">
            <li>
                <a href="#home">
                    <img src={homeIcon} alt="Home" className="nav-icon"/>
                </a>
            </li>
            <li>
                <a href="#about">
                    <img src={aboutIcon} alt="About" className="nav-icon"/>
                </a>
            </li>
            <li>
                <a href="#projects">
                    <img src={projectIcon} alt="Projects" className="nav-icon"/> 
                </a>
            </li>
            <li>
                <a href="#contact">
                    <img src={contactIcon} alt="Contact" className="nav-icon"/>                    
                </a>
            </li>
        </ul>
        </nav>
    );
}

