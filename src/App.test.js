import { render, screen } from '@testing-library/react';
import Homepage from './components/Homepage';
import Reservation from './components/Reservation';

test('Booking Button check', () => {
  render(<Homepage />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

