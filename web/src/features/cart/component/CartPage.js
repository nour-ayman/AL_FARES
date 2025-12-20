import React from "react";
// Correct Import Path: Go up 1 level (..) to 'cart', then into 'hooks'
import { useCart } from "../hooks/useCart"; 
import "./cartpage.css"; 
import { useNavigate } from "react-router-dom"; // Added navigate

const CartPage = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate(); // Navigation function

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          {/* <p>روح متخليش حاجة في نفسك</p> */}
        </div>
      ) : (
        <div className="cart-content">
          {/* LEFT SIDE: The Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="item-price">{item.price} EGP</p>
                </div>

                <div className="cart-item-actions">
                  <span className="quantity">Qty: {item.quantity}</span>
                  <button 
                    className="remove-btn" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: The Summary */}
          <div className="order-summary">
            <h2>Summary</h2>

            <div className="summary-row">
              <span>Total:</span>
              <span className="total-price">{totalPrice} EGP</span>
            </div>

            <button 
              className="checkout-btn"
              onClick={() => navigate("/checkout")} // Go to Checkout Page
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
