import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Import the Cart Provider (The Global Storage)
import { CartProvider } from './features/cart/hooks/useCart'; 

// Import your Components
import Navbar from './features/navbar/component/Navbar';
import LoginForm from './features/auth/component/LoginForm';
import AboutUs from './features/auth/component/AboutUs';
import Home from './features/home/component/Home';
import TextbooksPage from './features/products/textbooks/TextbooksPage';

// Import Category Pages
import BagsPage from './features/products/bags/BagsPage';
import ToolsPage from './features/products/tools/ToolsPage';

// Cart & Checkout Pages
import CartPage from './features/cart/component/CartPage';
import CheckoutPage from './features/cart/component/CheckoutPage';

// NEW IMPORT: Sign Up Form
import SignUpForm from './features/auth/component/SignUpForm';

function App() {
  return (
    // 2. Wrap the whole app so every page can access the Cart
    <CartProvider>
      <Router>
        {/* Navbar sits outside Routes so it can decide when to show/hide itself */}
        <Navbar />

        <Routes>
          {/* 1. The Landing Page (Login) */}
          <Route path="/" element={<LoginForm />} />
          
          {/* Explicit Login Route */}
          <Route path="/login" element={<LoginForm />} />

          {/* 🔥 👇 NEW ROUTE: Sign Up Page */}
          <Route path="/signup" element={<SignUpForm />} />

          {/* 2. The About Us Page */}
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/about" element={<AboutUs />} />

          {/* 3. The Main Home Page */}
          <Route path="/home" element={<Home />} />

          {/* 4. Category Pages */}
          <Route path="/textbooks" element={<TextbooksPage />} />
          <Route path="/bags" element={<BagsPage />} />
          <Route path="/tools" element={<ToolsPage />} />

          {/* 5. Cart & Checkout */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;