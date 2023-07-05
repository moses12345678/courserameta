import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';
const BookingForm = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  // Step 2: Create the updateTimes function to handle state change
  const updateTimes = () => {
    // For now, return the same available times regardless of the date
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  // Step 3: Create the initializeTimes function for initial state
  useEffect(() => {
    const reservedTimes = ['18:00', '20:00']; // Example of reserved times (fetched from API or local storage)
    const filteredTimes = updateTimes().filter((time) => !reservedTimes.includes(time));
    setAvailableTimes(filteredTimes);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions on form submission

    // Example code to send data to the local storage API using fetch
    const reservationData = {
      date,
      time,
      guests,
      occasion,
    };

    fetch('https://meanc4.azurewebsites.net/meanc/reservations/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Reservation submitted successfully:', data);
        navigate('/confirmation')
        // Perform any additional actions after successful reservation submission
      })
      .catch((error) => {
        console.error('Error submitting reservation:', error);
        // Handle error case if reservation submission fails
      });
  };

  // Function to check if any form input fields are invalid
  const isFormInvalid = () => {
    return !date || !time || !guests || !occasion;
  };

  return (
    <div className="booking-form" aria-label="Booking Form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              // Step 5: Dispatch state change when the date is changed
              setAvailableTimes(updateTimes());
            }}
            required />
        </label>
        <br />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <br />
        <br />
        <label>
          Number of guests:
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1" // HTML5 validation for minimum value
            required // HTML5 validation for required field
          />
        </label>
        <br />
        <label>
          Occasion:
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </label>
        <br />
        <button type="submit" disabled={isFormInvalid()} aria-label="Submit Reservation">
           Submit Reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

