import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from '../images/Logo.svg';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav role="navigation">
        <div className="nav1" style={{ cursor: 'pointer' }} onClick={() => (window.location.href = '/')}>
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav2">
          <div className="hamburger" onClick={handleMenuToggle}>
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul className={`menu ${isMenuOpen ? 'show-menu' : ''}`}>
            <li>
              <a href="/" aria-current="page">Home</a>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <Link to="/">Online Order</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
