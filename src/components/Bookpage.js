import React from 'react';
import BookingForm from './BookingForm';
import Footer from './Footer';
import Header from './Header';
import Nav from "./Nav";
import  './Style.css'; //Import the css file

const Bookpage = () => {
    
  return (
    <div>
       <Nav />
       <h1>Bookpage</h1>
        <BookingForm />
      <Footer />
    </div>
  );
};

export default Bookpage;
