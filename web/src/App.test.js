import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial entry page (Login)', () => {
// 1. Render the App (acts like opening the website)
  render(<App />);

  // 2. Check if the "Login" button exists
  // This is better than 'getAllByText' because it specifically looks for a button
  const loginButton = screen.getByRole('button', { name: /login/i });

  // 3. Assert that the button is in the document
  expect(loginButton).toBeInTheDocument();
});
//--------------------------------------------//
// el comment da lel team el maaya
//--------------------------------------------//
// do we test the login only?
// Short answer: Yes, for right now.
// But technically, no, it is testing the "App Start Up".