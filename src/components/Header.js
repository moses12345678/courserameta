import React, { useEffect, useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from '../images/Logo.svg';

const Header = () => {
  return (
    <>
    <nav>
      <img src={Logo} alt="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
          
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
    </nav>
    </>
  )
}
export default Header;
