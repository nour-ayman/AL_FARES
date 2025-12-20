import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../features/auth/component/LoginForm'; 
import { BrowserRouter } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

// 1. Mock Firebase Auth
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));

// 2. Mock the firebase config
jest.mock('../firebase', () => ({
  auth: {},
}));

// 3. Helper to wrap component (With the Warning Fix Included)
const MockLogin = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <LoginForm />
    </BrowserRouter>
  );
};

describe('LoginForm Component Tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test 1: Check UI Elements
  test('renders Login inputs and buttons', () => {
    render(<MockLogin />);
    
    // We use .toBeTruthy() to check existence without extra libraries
    expect(screen.getByPlaceholderText(/EMAIL/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/PASSWORD/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /LOGIN/i })).toBeTruthy();
    expect(screen.getByText(/SIGN UP/i)).toBeTruthy();
  });

  // Test 2: Typing Simulation
  test('allows user to type in inputs', () => {
    render(<MockLogin />);
    
    const emailInput = screen.getByPlaceholderText(/EMAIL/i);
    const passInput = screen.getByPlaceholderText(/PASSWORD/i);

    fireEvent.change(emailInput, { target: { value: 'wezza@test.com' } });
    fireEvent.change(passInput, { target: { value: '123456' } });

    expect(emailInput.value).toBe('wezza@test.com');
    expect(passInput.value).toBe('123456');
  });

  // Test 3: Successful Login
  test('shows success message on valid login', async () => {
    signInWithEmailAndPassword.mockResolvedValueOnce({
      user: { email: 'wezza@test.com' }
    });

    render(<MockLogin />);

    fireEvent.change(screen.getByPlaceholderText(/EMAIL/i), { target: { value: 'wezza@test.com' } });
    fireEvent.change(screen.getByPlaceholderText(/PASSWORD/i), { target: { value: 'correctpass' } });
    fireEvent.click(screen.getByRole('button', { name: /LOGIN/i }));

    await waitFor(() => {
        expect(screen.getByText(/LOGGED IN!/i)).toBeTruthy();
    });
  });

  // Test 4: Failed Login
  test('shows error message on failed login', async () => {
    signInWithEmailAndPassword.mockRejectedValueOnce({
      message: 'Invalid credentials'
    });

    render(<MockLogin />);

    fireEvent.change(screen.getByPlaceholderText(/EMAIL/i), { target: { value: 'wrong@test.com' } });
    fireEvent.change(screen.getByPlaceholderText(/PASSWORD/i), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByRole('button', { name: /LOGIN/i }));

    await waitFor(() => {
        expect(screen.getByText(/Invalid credentials/i)).toBeTruthy();
    });
  });

});