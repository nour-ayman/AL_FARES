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

// 🔥 Import the Bags Page
import BagsPage from './features/products/bags/BagsPage';

// 🔥 Added: Import Tools Page
import ToolsPage from './features/products/tools/ToolsPage';

// Cart Page from your friend's work
import CartPage from './features/cart/component/CartPage';

// 🔥 Added: Import Checkout Page
import CheckoutPage from './features/cart/component/CheckoutPage';

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

          {/* 2. The About Us Page */}
          <Route path="/AboutUs" element={<AboutUs />} />

          {/* 3. The Main Home Page */}
          <Route path="/home" element={<Home />} />

          {/* 4. Category Pages */}
          <Route path="/textbooks" element={<TextbooksPage />} />

          {/* Bags Page */}
          <Route path="/bags" element={<BagsPage />} />

          {/* Tools Page */}
          <Route path="/tools" element={<ToolsPage />} />

          {/* Cart Page */}
          <Route path="/cart" element={<CartPage />} />

          {/* 🔥 Checkout Page */}
          <Route path="/checkout" element={<CheckoutPage />} />

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
