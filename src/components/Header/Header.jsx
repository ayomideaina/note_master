import React from 'react';
import './Header.css';

const Header = () => {
  return (
   <header className="header">
      <nav>
        <div className="navbar">
          <div className="logo">
            NoteMaster
          </div>
          <ul className="navlinks">
            <li className="home"><a href="#home">Memoir Collection</a></li>
            <li><a href="#MasterpieceCollection">Masterpiece Collection</a></li>
            <li><a href="#InspireCollection">Inspire Collection </a></li>
            <li><a href="#New">New</a></li>
            <li><a href="#Bestsellers">Bestsellers</a></li>
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
            <button className="btn-explore ">Explore</button>
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
