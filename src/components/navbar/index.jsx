import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MiLogo</Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {/* Puedes usar un ícono de FontAwesome o Unicode */}
          <span>{isOpen ? "\u2715" : "\u2630"}</span>
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/products" className="nav-links" onClick={toggleMenu}>
              Artículos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/special-prices" className="nav-links" onClick={toggleMenu}>
              Subida
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
