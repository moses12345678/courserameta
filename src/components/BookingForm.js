import React, { useState } from 'react';


const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform actions on form submission
    };
  
    return (
      <div className='booking-form'>
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="res-time">Choose time</label>
            <select value={time} onChange={(e) => setTime(e.target.value)}>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
                <option value="22">22:00</option>
            </select>
          <br />
  
          <label>
            Number of guests:
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </label>
          <br />
  
          <label>
            Occasion:
            <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </label>
          <br />
  
          <button type="submit">Submit Reservation</button>
        </form>
      </div>
    );
  };
  
  export default BookingForm;  