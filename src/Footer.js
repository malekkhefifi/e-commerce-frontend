import React from 'react';
import './Footer.css'; // Optional: if you want to add custom CSS styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-section">
          <h4>ChikShop</h4>
          <p>Your go-to fashion destination for every style.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
           
            <li><a href="/">Home</a></li>
            
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div className="footer-section">
          <h4>Stay Connected</h4>
          <p>Follow us for the latest updates, offers, and new collections.</p>
          <ul className="social-media">
            <li><a href="https://www.facebook.com/chikshop" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="https://www.instagram.com/chikshop" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="https://twitter.com/chikshop" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="https://www.pinterest.com/chikshop" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest"></i> Pinterest</a></li>
            <li><a href="https://www.tiktok.com/@chikshop" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i> TikTok</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 ChikShop. All rights reserved.</p>
        <p>Designed with ❤️ by [Khefifi Malek]</p>
      </div>
    </footer>
  );
};

export default Footer;





