import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Booking Form");
  expect(headingElement).toBeInTheDocument();
})

describe('BookingForm', () => {
  it('should render the form with correct HTML5 validation attributes', () => {
    render(<BookingForm />);

    // Validate the 'date' input field
    const dateInput = screen.getByLabelText('Date:');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();

    // Validate the 'time' select field
    const timeSelect = screen.getByLabelText('Choose time');
    expect(timeSelect).toHaveAttribute('required', '');
    expect(timeSelect).toHaveDisplayValue('Select a time');

    // Validate the 'guests' input field
    const guestsInput = screen.getByLabelText('Number of guests:');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toBeRequired();

    // Validate the 'occasion' select field
    const occasionSelect = screen.getByLabelText('Occasion:');
    expect(occasionSelect).toHaveAttribute('required', '');
    expect(occasionSelect).toHaveDisplayValue('Select an occasion');

    // Validate the submit button
    const submitButton = screen.getByRole('button', { name: 'Submit Reservation' });
    expect(submitButton).toBeDisabled();
  });
});
