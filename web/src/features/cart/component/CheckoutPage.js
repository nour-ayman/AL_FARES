import React from "react";
import { useCart } from "../hooks/useCart";
import "./checkout.css";

const CheckoutPage = () => {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-content">

        {/* LEFT SIDE — BILLING DETAILS (UNCHANGED) */}
        <div className="checkout-form">
          <h2>Billing Details</h2>

          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Address</label>
          <input type="text" placeholder="Enter your address" />

          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone" />
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY (FIXED, DYNAMIC DATA) */}
        <div className="checkout-summary">
          <h2>Order Summary</h2>

          {cartItems.length === 0 ? (
            <p className="empty-summary">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <div className="summary-info">
                  <h4>{item.name}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>

                <p className="summary-price">
                  {item.price * item.quantity} EGP
                </p>
              </div>
            ))
          )}

          <div className="summary-total">
            <span>Total:</span>
            <strong>{totalPrice} EGP</strong>
          </div>

          <button className="confirm-btn">Confirm Order</button>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
