import React from 'react';
import './AboutUs.css'; // Importing external CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Your trusted platform for connecting with top chartered accountants.</p>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At FinPro Connect, our mission is to bridge the gap between individuals, businesses, and the most qualified chartered accountants. We aim to simplify financial management and empower our users with the tools and resources they need to make informed decisions.
        </p>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Trust:</strong> We prioritize transparency and reliability in all our services.</li>
          <li><strong>Innovation:</strong> Leveraging technology to simplify financial solutions.</li>
          <li><strong>Excellence:</strong> Connecting you with top-rated professionals to ensure quality.</li>
          <li><strong>Accessibility:</strong> Making financial expertise available to everyone, everywhere.</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p>
          Our team is a group of passionate individuals with expertise in technology, finance, and customer service. Together, we strive to deliver an exceptional experience for our users, ensuring their financial goals are met with ease.
        </p>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          Have questions or need assistance? Our support team is here to help. Reach out to us via email at <a href="mailto:support@finproconnect.com">support@finproconnect.com</a> or visit our <a href="/contact">Contact Us</a> page.
        </p>
      </section>

      <footer className="about-us-footer text-center">
        <p>© 2025 FinPro Connect. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;