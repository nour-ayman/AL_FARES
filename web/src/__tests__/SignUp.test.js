import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// 👇 ADJUST PATH: Assuming it is in the same folder as LoginForm
import SignUpForm from '../features/auth/component/SignUpForm'; 
import { BrowserRouter } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc } from 'firebase/firestore';

// 1. Mock Firebase Auth
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
}));

// 2. Mock Firebase Firestore (NEW! Required because you use setDoc)
jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  doc: jest.fn(),
  setDoc: jest.fn(),
}));

// 3. Mock the firebase config
jest.mock('../firebase', () => ({
  auth: {},
  db: {},
}));

// 4. Helper to wrap component
// NEW (Silences the warning)
const MockSignUp = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <SignUpForm />
    </BrowserRouter>
  );
};

describe('SignUpForm Component Tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test 1: Check UI Elements
  test('renders Sign Up inputs and buttons', () => {
    render(<MockSignUp />);
    
    // Check using your specific placeholders
    expect(screen.getByPlaceholderText(/EMAIL/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/^PASSWORD/i)).toBeTruthy(); // ^ means "starts with" to avoid confusion with Confirm Password
    expect(screen.getByPlaceholderText(/CONFIRM PASSWORD/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /REGISTER/i })).toBeTruthy();
  });

  // Test 2: Typing Simulation
  test('allows user to type in all fields', () => {
    render(<MockSignUp />);
    
    const emailInput = screen.getByPlaceholderText(/EMAIL/i);
    const passInput = screen.getByPlaceholderText(/^PASSWORD/i);
    const confirmInput = screen.getByPlaceholderText(/CONFIRM PASSWORD/i);

    fireEvent.change(emailInput, { target: { value: 'wezza@test.com' } });
    fireEvent.change(passInput, { target: { value: '123456' } });
    fireEvent.change(confirmInput, { target: { value: '123456' } });

    expect(emailInput.value).toBe('wezza@test.com');
    expect(passInput.value).toBe('123456');
    expect(confirmInput.value).toBe('123456');
  });

  // Test 3: Password Mismatch Error
  test('shows error when passwords do not match', async () => {
    render(<MockSignUp />);

    // Type different passwords
    fireEvent.change(screen.getByPlaceholderText(/^PASSWORD/i), { target: { value: '123456' } });
    fireEvent.change(screen.getByPlaceholderText(/CONFIRM PASSWORD/i), { target: { value: 'different' } });
    
    fireEvent.click(screen.getByRole('button', { name: /REGISTER/i }));

    await waitFor(() => {
        expect(screen.getByText(/Passwords do not match/i)).toBeTruthy();
    });
  });

  // Test 4: Successful Registration
  test('shows success message on valid registration', async () => {
    // Mock successful auth creation
    createUserWithEmailAndPassword.mockResolvedValueOnce({
      user: { uid: '12345', email: 'wezza@test.com' }
    });
    // Mock successful database write
    setDoc.mockResolvedValueOnce();

    render(<MockSignUp />);

    // Fill form correctly
    fireEvent.change(screen.getByPlaceholderText(/EMAIL/i), { target: { value: 'wezza@test.com' } });
    fireEvent.change(screen.getByPlaceholderText(/^PASSWORD/i), { target: { value: '123456' } });
    fireEvent.change(screen.getByPlaceholderText(/CONFIRM PASSWORD/i), { target: { value: '123456' } });
    
    fireEvent.click(screen.getByRole('button', { name: /REGISTER/i }));

    // Check for "ACCOUNT CREATED!"
    await waitFor(() => {
        expect(screen.getByText(/ACCOUNT CREATED!/i)).toBeTruthy();
    });
  });

});