import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Use history.push to navigate to a new route
    navigate('/booking');
  };
  return (
    <div className="confirmed-booking" aria-label="Confirmed Booking">
      <h2>Booking Confirmed</h2>
      <p>Your booking has been successfully confirmed.</p>
      <button onClick={handleButtonClick} aria-label="Go to Back">Go to Back</button>
    </div>
  );
};

export default ConfirmedBooking;
