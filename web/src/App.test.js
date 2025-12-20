import { render, screen } from '@testing-library/react';
import App from './App';

// 1. Mock Firebase Auth (Because App loads Login immediately)
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
}));

// 2. Mock Firestore (Because App might load SignUp)
jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  doc: jest.fn(),
  setDoc: jest.fn(),
}));

// 3. Mock the local firebase config
jest.mock('./firebase', () => ({
  auth: {},
  db: {},
}));

test('renders initial entry page (Login)', () => {
  // 1. Render the whole App
  render(<App />);

  // 2. Find the Login button
  // We use the standard .toBeTruthy() to check existence
  const loginButton = screen.getByRole('button', { name: /login/i });

  // 3. Assert it exists (Green Light)
  expect(loginButton).toBeTruthy();
});