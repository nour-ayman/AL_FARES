import { render, screen, fireEvent } from '@testing-library/react';
import CartPage from '../features/cart/component/CartPage'; 
import { useCart } from '../features/cart/hooks/useCart';
import { useNavigate } from 'react-router-dom';

// 1. Mock the useCart hook
jest.mock('../features/cart/hooks/useCart');

// 2. Mock the Router
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('CartPage Tests (TC-08 & TC-09)', () => {
  const mockRemove = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useNavigate.mockReturnValue(mockNavigate);
  });

  // Test 1: Render Empty Cart
  test('renders empty cart message when no items', () => {
    useCart.mockReturnValue({
      cartItems: [],
      removeFromCart: mockRemove,
      totalPrice: 0
    });

    render(<CartPage />);
    
    expect(screen.getByText(/Your cart is empty/i)).toBeTruthy();
  });

  // Test 2: Render Items & Remove Function (TC-08)
  test('TC-08: renders items and calls remove function', () => {
    useCart.mockReturnValue({
      cartItems: [
        { id: 101, name: 'Architecture Book', price: 150, quantity: 1, image: 'book.jpg' }
      ],
      removeFromCart: mockRemove,
      totalPrice: 150
    });

    render(<CartPage />);

    // 1. Check if item details are visible
    expect(screen.getByText(/Architecture Book/i)).toBeTruthy();
    
    // 🔥 FIX IS HERE: Use getAllByText because "150 EGP" appears in Item AND Total
    // We grab the first one [0] just to prove it exists on screen
    const prices = screen.getAllByText(/150 EGP/i);
    expect(prices[0]).toBeTruthy();

    // 2. Find and Click Remove Button
    const removeBtn = screen.getByText(/Remove/i);
    fireEvent.click(removeBtn);

    // 3. Assert the function was called with ID 101
    expect(mockRemove).toHaveBeenCalledWith(101);
  });

  // Test 3: Checkout Navigation (TC-09)
  test('TC-09: navigates to checkout page when button clicked', () => {
    useCart.mockReturnValue({
      cartItems: [
        { id: 101, name: 'Pen', price: 10, quantity: 2 }
      ],
      removeFromCart: mockRemove,
      totalPrice: 20
    });

    render(<CartPage />);

    const checkoutBtn = screen.getByText(/Checkout/i);
    fireEvent.click(checkoutBtn);

    expect(mockNavigate).toHaveBeenCalledWith('/checkout');
  });

});