import React from "react";
import Logo from '../images/Logo.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-img">
        <img src={Logo} alt="logo footer"/>
        </div>
        <div className="footer-text">
          <p>Doormat Naviagtion</p>
          <p>Contact</p>
          <p>Social Media Links</p>
        </div>
      </footer>
    </>
  )
};
export default Footer;
