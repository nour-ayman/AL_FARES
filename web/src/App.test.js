import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial entry page (Login)', () => {
  // 1. Render the App (acts like opening the website)
  render(<App />);

  // 2. Search for the word "Login" (case insensitive)
  // We use getAllByText because "Login" might appear in the header AND the button
  const loginElements = screen.getAllByText(/login/i);

  // 3. Check if we found at least one "Login" element
  expect(loginElements.length).toBeGreaterThan(0);
});
//--------------------------------------------//
// el comment da lel team el maaya
//--------------------------------------------//
// do we test the login only?
// Short answer: Yes, for right now.
// But technically, no, it is testing the "App Start Up".