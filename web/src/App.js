import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './features/navbar/component/Navbar'; // Import Navbar
import LoginForm from './features/auth/component/LoginForm';
import AboutUs from './features/auth/component/AboutUs';

function App() {
  return (
    <Router>
      {/* Navbar goes here. It will self-check if it should be visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        {/* You will likely add a Home route later, e.g.:
            <Route path="/home" element={<Home />} /> 
        */}
      </Routes>
    </Router>
  );
}

export default App;