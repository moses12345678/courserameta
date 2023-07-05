import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Use history.push to navigate to a new route
    navigate('/booking');
  };
  return (
    <div className="confirmed-booking">
      <h2>Booking Confirmed</h2>
      <p>Your booking has been successfully confirmed.</p>
      <button onClick={handleButtonClick}>Go to Back</button>
    </div>
  );
};

export default ConfirmedBooking;
