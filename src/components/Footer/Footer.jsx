import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-sec'>
      <div className="footer-content">
        <div className="footer-text">
          <h3>NoteMaster</h3>
          <p>info@notemaster.com</p>
          <p>+01 234 567 789</p>
          <p>919 Kearny St</p>
          <p>San Francisco, CA 94133</p>
        </div>

        <div>
          <ul className="footerlinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <ul className="footerlinks">
            <li><a href="#home">Informations</a></li>
            <li><a href="#FAQ">FAQ</a></li>
            <li><a href="#Terms and Conditions">Terms and Conditions</a></li>
            <li><a href="#Privacy policy">Privacy policy</a></li>
            <li><a href="#Delivery and payment">Delivery and payment</a></li>
          </ul>
        </div>

        <div className="socials">
          <div>
            <p>Social media</p>
          </div>
          <div className='social-media'>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-tiktok"></i>
          </div>
        </div>
      </div>
      <p>Website made by Me </p>
    </footer>
  );
};

export default Footer;
