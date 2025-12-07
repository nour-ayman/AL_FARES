import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header>
        <div className="logo">AL FARES</div>

      <Link to="/">
        <button className="login-btn">LOGIN</button>
      </Link>
      </header>

      <main className="main-content">
        <div className="content-wrapper">
          <h1>Who we are?</h1>
          <p>
            AL FARES is your one-stop online store for all school and university supplies.
            From notebooks and pens to backpacks and study essentials, we provide everything students need.
          </p>
          <p>
            What sets us apart? We are <strong>available 24/7</strong> to serve our customers, ensuring you can order anytime and get your supplies quickly and reliably.
          </p>
          <p>
            Our mission is to make shopping for educational supplies easy, convenient, and fast, so you can focus on what really matters – your studies.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
