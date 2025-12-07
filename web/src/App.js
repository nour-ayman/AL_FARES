import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './features/auth/component/LoginForm';
import AboutUs from './features/auth/component/AboutUs'; // import AboutUs component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/AboutUs" element={<AboutUs />} /> {/* new route for About Us */}
      </Routes>
    </Router>
  );
}

export default App;
