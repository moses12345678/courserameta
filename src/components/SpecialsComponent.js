import React from 'react';
import Image1 from '../images/icons_assets/greek salad.jpg';
import Image2 from '../images/icons_assets/bruchetta.svg';
import Image3 from '../images/icons_assets/lemon dessert.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const SpecialsComponent = () => {
  return (
    <section className='section-special' aria-label="This Week's Special">
      <div className="top-section">
        <h1>This Week's Special!</h1>
        <button>Online Menu</button>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={Image1} alt="Special 1" />
          <h2>Greek salad</h2><h2 style={{color:'orange'}}>$12.99</h2>
          <p>Lorem Ipsum is simply dummy<br /> 
            text of the printing and typesetting<br />  
            industry. Lorem Ipsum has been <br /> 
            the industry's standard dummy text<br /> 
             ever since<br />  
            the 1500s, when an
            unknown printer took a galley of<br />  
            type and scrambled it to make</p>
            <br />
            <p> Order a delivery   <FontAwesomeIcon icon={faTruck} /></p>
        </div>
        <div className="card">
          <img src={Image2} alt="Special 2" />
          <h2>Bruchetta</h2><h2 style={{color:'orange'}}>$5.99</h2>
          <p>Lorem Ipsum is simply dummy<br /> 
            text of the printing and typesetting<br />  
            industry. Lorem Ipsum has been <br /> 
            the industry's standard dummy text<br /> 
             ever since<br />  
            the 1500s, when an
            unknown printer took a galley of<br />  
            type and scrambled it to make</p>
            <br />
            <p> Order a delivery   <FontAwesomeIcon icon={faTruck} /></p>
        </div>
        <div className="card">
          <img src={Image3} alt="Special 3" />
          <h2>Lemon dessert</h2><h2 style={{color:'orange'}}>$5.00</h2>
          <p>Lorem Ipsum is simply dummy<br /> 
            text of the printing and typesetting<br />  
            industry. Lorem Ipsum has been <br /> 
            the industry's standard dummy text<br /> 
             ever since<br />  
            the 1500s, when an
            unknown printer took a galley of<br />  
            type and scrambled it to make</p>
            <br />
            <p> Order a delivery   <FontAwesomeIcon icon={faTruck} /></p>
        </div>
      </div>
    </section>
  );
};

export default SpecialsComponent;
