// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1 className="text-center">Welcome to Our Platform</h1>
        <p className="text-center">Find the best chartered accountants easily and streamline your financial journey!</p>
      </header>

      <section className="features-section">
        <div className="feature">
          <h2>Top-Rated Professionals</h2>
          <p>Browse through a curated list of highly-rated chartered accountants with verified credentials and reviews.</p>
        </div>
        <div className="feature">
          <h2>Customizable Services</h2>
          <p>Find accountants offering a range of services, from tax filing to financial consulting, tailored to your needs.</p>
        </div>
        <div className="feature">
          <h2>Affordable Pricing</h2>
          <p>Compare prices and choose services that fit your budget without compromising on quality.</p>
        </div>
        <div className="feature">
          <h2>Secure Communication</h2>
          <p>Interact with your accountant through our secure messaging platform, ensuring privacy and data protection.</p>
        </div>
        <div className="feature">
          <h2>Expert Guidance</h2>
          <p>Access resources, blogs, and webinars to stay updated on the latest financial and tax-related developments.</p>
        </div>
      </section>

      <section className="testimonial-section text-center">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"This platform made finding the perfect accountant so easy. Highly recommended!"</p>
          <span>- Jane Doe</span>
        </div>
        <div className="testimonial">
          <p>"Great experience! The accountant I hired helped me save thousands on my taxes."</p>
          <span>- John Smith</span>
        </div>
      </section>

      <section className="cta-section text-center">
        <h2>Get Started Today</h2>
        <p>Sign up to access our full range of services and find the perfect accountant for your needs.</p>
        <Link to="/Accountants" className="cta-button">Find Accountants</Link>
      </section>

      <footer className="home-footer text-center">
        <p>© 2025 Chartered Accountants Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
