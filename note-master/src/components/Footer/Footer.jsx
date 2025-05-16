import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div>
          <ul className="footerlinks">
            <li className="home"><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <ul className="footerlinks">
            <li className="home"><a href="#home">Informations</a></li>
            <li><a href="#FAQ">FAQ</a></li>
            <li><a href="#Terms and Conditions">Terms and Conditions</a></li>
            <li><a href="#Privacy policy">Privacy policy</a></li>
            <li><a href="#Delivery and payment">Delivery and payment</a></li>
          </ul>
        </div>
      </div>
      <p>Website made in WebWave by Me </p>
    </footer>
  );
};

export default Footer;
