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
       <div style={{ marginTop: '45px' }}>
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
};

export default Bookpage;
