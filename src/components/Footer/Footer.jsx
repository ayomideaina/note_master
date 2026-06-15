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
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About Us' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="footerlinks">
            {[
              { href: '#info', label: 'Informations' },
              { href: '#FAQ', label: 'FAQ' },
              { href: '#terms', label: 'Terms and Conditions' },
              { href: '#privacy', label: 'Privacy policy' },
              { href: '#delivery', label: 'Delivery and payment' },
            ].map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
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
      <p>Website made by MideCodes </p>
    </footer>
  );
};

export default Footer;
