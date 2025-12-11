// 1. THIS IS THE MISSING IMPORT
// It teaches Jest what "toBeInTheDocument" means
import '@testing-library/jest-dom'; 

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial entry page (Login)', () => {
  // 1. Render the App
  render(<App />);

  // 2. Find the Login button
  // using getByRole is more precise than getByText
  const loginButton = screen.getByRole('button', { name: /login/i });

  // 3. Assert it exists
  expect(loginButton).toBeInTheDocument();
});
//--------------------------------------------//
// el comment da lel team el maaya
//--------------------------------------------//
// do we test the login only?
// Short answer: Yes, for right now.
// But technically, no, it is testing the "App Start Up".