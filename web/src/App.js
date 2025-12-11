import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your Components
import Navbar from './features/navbar/component/Navbar';
import LoginForm from './features/auth/component/LoginForm';
import AboutUs from './features/auth/component/AboutUs';
import Home from './features/home/component/Home'; // <--- Import the new Home page

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
        
        {/* 3. The Main Home Page (Where your Category Cards are) */}
        <Route path="/home" element={<Home />} />

        {/* 4. Placeholder Pages for Categories 
            (These match the paths in your CategorySection.js) */}
        <Route 
          path="/textbooks" 
          element={<div style={{padding: '100px', textAlign: 'center'}}><h1>📚 Textbooks Page (Coming Soon)</h1></div>} 
        />
        <Route 
          path="/bags" 
          element={<div style={{padding: '100px', textAlign: 'center'}}><h1>🎒 Bags Page (Coming Soon)</h1></div>} 
        />
        <Route 
          path="/tools" 
          element={<div style={{padding: '100px', textAlign: 'center'}}><h1>📐 Tools Page (Coming Soon)</h1></div>} 
        />
      </Routes>
    </Router>
  );
}

export default App;