import React from 'react';
// We'll create this CSS file next
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Install react-icons if you don't have it: npm install react-icons
import "./Footer.css"
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: Brand and Copyright */}
        <div className="footer-section footer-brand">
          <h3>Netnova IT Solutions</h3>
          <p className="footer-tagline">Your Partner in Digital Transformation</p>
          <p className="footer-copyright">&copy; {currentYear} Netnova IT Solutions. All rights reserved.</p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul className='u'>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Section 3: Our Services */}
        <div className="footer-section footer-services">
          <h4>Our Services</h4>
          <ul className='u1'>
            <li><a href="webdevelopment">Web Development</a></li>
            <li><a href="cloudsolutions">Cloud Solutions</a></li>
            <li><a href="cybersecurity">Cybersecurity</a></li>
            <li><a href="itconsulting">IT Consulting</a></li>
            <li><a href="dataanalytics">Data Analytics</a></li>
          </ul>
        </div>

        {/* Section 4: Contact Information */}
        <div className="footer-section footer-contact">
          <h4>Contact Us</h4>
          <p><i className="fas fa-map-marker-alt"></i> 3522 Maybelle Ave , Oakland,Ca 94619</p>
          <p><i className="fas fa-phone"></i> +1 (415) 525-4231</p>
          <p><i className="fas fa-envelope"></i> info@netnova.com</p>
        </div>

        {/* Section 5: Social Media */}
        <div className="footer-section footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;