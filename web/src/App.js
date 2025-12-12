import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

function App() {
  return (
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

        {/* 🔥 Real Bags Page */}
        <Route path="/bags" element={<BagsPage />} />

        {/* 🔥 Real Tools Page */}
        <Route path="/tools" element={<ToolsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
