import React from 'react';
import { Navigate } from 'react-router-dom';

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>We offer a variety of services to meet your needs.</p>

      <section className="key-features-section">
          <div className="features-grid">
            <a href='/services/webdevelopment'><div className="feature-item1">
              <h3>Dynamic Websites</h3>
              <p>Engaging, responsive, and high-performance web applications tailored to your needs.</p>
            </div></a>
            <div className="feature-item2">
              <h3>IT Consulting</h3>
              <p>Expert advice and solutions to optimize your IT infrastructure and strategies.</p>
            </div>
            <div className="feature-item3">
              <h3>Product Development</h3>
              <p>From concept to launch, we build innovative products that stand out.</p>
            </div>

            <div className="feature-item4">
              <h3>Networking</h3>
              <p>We design and architech a relaiable Networking functions for your Businesses.</p>
            </div>

            <div className="feature-item5">
              <h3>Cloud Solutions </h3>
              <p>We design and architech a relaiable Networking functions for your Businesses.</p>
            </div>
            <div className="feature-item6">
              <h3>Data Analaytic</h3>
              <p>We design and architech a relaiable Networking functions for your Businesses.</p>
            </div>
            <div className="feature-item7">
              <h3>CyberSecurity</h3>
              <p>We design and architech a relaiable Networking functions for your Businesses.</p>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Services;