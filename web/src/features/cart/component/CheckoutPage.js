import React, { useState } from "react";
import "./checkout.css";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    payment: "cash",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Confirmed! Thank you for your purchase.");
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="checkout-section">
          <h2>Personal Information</h2>
          <input 
            type="text" 
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="text" 
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="checkout-section">
          <h2>Delivery Address</h2>
          <input 
            type="text" 
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input 
            type="text" 
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="checkout-section">
          <h2>Payment Method</h2>

          <label className="radio-row">
            <input 
              type="radio"
              name="payment"
              value="cash"
              checked={formData.payment === "cash"}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>

          <label className="radio-row">
            <input 
              type="radio"
              name="payment"
              value="card"
              checked={formData.payment === "card"}
              onChange={handleChange}
            />
            Credit Card
          </label>
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <p>Items Total: <strong>350 EGP</strong></p>
          <p>Delivery Fee: <strong>30 EGP</strong></p>
          <p className="checkout-total">Total: <strong>380 EGP</strong></p>
        </div>

        <button className="checkout-btn" type="submit">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
