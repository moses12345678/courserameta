import React, { useEffect, useRef, useState } from "react";
import Logo from '../images/Logo.svg';

const Header = () => {
  return (
    <>
    <nav>
      <img src={Logo} alt="logo" />
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/online">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
    </>
  )
}
export default Header;
