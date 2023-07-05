import React from "react";
import Logo from '../images/icons_assets/logo_footer.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-img">
        <img src={Logo} alt="Logo footer"/>
        </div>
        <div className="footer-text">
          <div>
            <h3>Doormat Naviagtion</h3>
            <p>Navigation</p>
            <p>Menu</p>
            <p>About</p>
            <p>Reservation</p>
          </div>
          <div>
          <h3>Contact</h3>
          <p>Adressess: 2349 Kimberly Ousted Col, Ohio</p>
          <p>Phone Number: 614 098 777</p>
          <p>Email: info@littlelemon.com</p>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <p><FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} /></p>
          </div>
        </div>
      </footer>
    </>
  )
};
export default Footer;
