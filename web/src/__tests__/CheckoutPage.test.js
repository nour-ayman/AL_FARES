import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CheckoutPage from '../features/cart/component/CheckoutPage'; 
import { useCart } from '../features/cart/hooks/useCart';
import { addDoc } from 'firebase/firestore';

// 1. Mock Firebase
jest.mock('../firebase', () => ({
  auth: { currentUser: { uid: 'user123', email: 'test@test.com' } },
  db: {}
}));

jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  addDoc: jest.fn(),
  serverTimestamp: jest.fn(),
}));

// 2. Mock useCart hook
jest.mock('../features/cart/hooks/useCart');

describe('CheckoutPage Tests (TC-09 & TC-10)', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  // TC-09: Open Checkout Page (Billing + Summary appear)
  test('TC-09: renders billing form and order summary', () => {
    // Mock Cart with Items
    useCart.mockReturnValue({
      cartItems: [{ id: 1, name: 'Test Book', price: 100 }],
      totalPrice: 100
    });

    render(<CheckoutPage />);

    // 1. Check Personal Info Fields
    expect(screen.getByPlaceholderText(/Full Name/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/Phone Number/i)).toBeTruthy();
    
    // 2. Check Summary 
    expect(screen.getByText(/Items Total:/i)).toBeTruthy();
    
    // Use getAllByText for prices to safe against duplicates
    const itemsPrice = screen.getAllByText(/100 EGP/i);
    expect(itemsPrice[0]).toBeTruthy();
    
    // 🔥 FIX: Use getAllByText because "130 EGP" is in the Summary AND the Button
    const totalWithDelivery = screen.getAllByText(/130 EGP/i);
    expect(totalWithDelivery[0]).toBeTruthy();
  });

  // TC-10: Checkout With Empty Cart (Prevent Submission)
  test('TC-10: shows error alert if submitting with empty cart', async () => {
    // Mock Empty Cart
    useCart.mockReturnValue({
      cartItems: [],
      totalPrice: 0
    });

    render(<CheckoutPage />);

    // 1. Fill out the form
    fireEvent.change(screen.getByPlaceholderText(/Full Name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText(/Phone Number/i), { target: { value: '0100000000' } });
    fireEvent.change(screen.getByPlaceholderText(/Street Address/i), { target: { value: 'Cairo' } });
    fireEvent.change(screen.getByPlaceholderText(/City/i), { target: { value: 'Cairo' } });

    // 2. Click Confirm
    const submitBtn = screen.getByRole('button', { name: /Confirm Order/i });
    fireEvent.click(submitBtn);

    // 3. Verify Alert was called
    await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith("Your cart is empty!");
    });
    
    // 4. Verify we did NOT send data to Firebase
    expect(addDoc).not.toHaveBeenCalled();
  });

});