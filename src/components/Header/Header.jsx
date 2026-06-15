import React from 'react';
import './Header.css';
import Button from '../Button/Button';

const Header = () => {
  return (
   <header className="header">
      <nav>
        <div className="navbar">
          <div className="logo">
            NoteMaster
          </div>
    
          <ul className="navlinks">
            {[
              { href: '#home', label: 'Memoir Collection', className: 'home' },
              { href: '#MasterpieceCollection', label: 'Masterpiece Collection' },
              { href: '#InspireCollection', label: 'Inspire Collection' },
              { href: '#New', label: 'New' },
              { href: '#Bestsellers', label: 'Bestsellers' },
            ].map((link) => (
              <li key={link.href} className={link.className || ''}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-text">
          <div>
            <h1>Let's discover our new notebook collections</h1>
            <p>
              Step into our world where every page holds the promise of new ideas and endless possibilities.
            </p>
          </div>
          <div className="hero-button">
            <Button variant="explore">Explore</Button>
          </div>
      </div>
      <div className="hero-image">
        <img 
        src="https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/webpage_69/m694epyz/element_1166/pexels-cottonbro-studio-5190600.png" 
        alt="notebook" />
      </div>
    </div>
    </header>
  );
};

export default Header;
