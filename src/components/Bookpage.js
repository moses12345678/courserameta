import React from 'react';
import BookingForm from './BookingForm';
import Footer from './Footer';
import Header from './Header';
import  './Style.css'; //Import the css file

const Bookpage = () => {
  return (
    <div>
       <Header />
       <h1>Bookpage</h1>
        <BookingForm />
      <Footer />
    </div>
  );
};

export default Bookpage;
