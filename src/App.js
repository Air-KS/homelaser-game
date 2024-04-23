/* src/App.css */
import React from 'react';
import VideoPlayer from './components/VideoPlayer';


import './App.css';
import './styles/header.css';

function App() {
  return (
    <div className='header' data-section-theme="dark">
      <div className="top-banner">
        <div className="header-container">
          <div className="left-container">
            <a href="https://air-ks.github.io/homelaser-game/">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
            </a>
          </div>
          <div className='right-container'>
            <nav className='navbar-menu'>
              <ul className='nav-menu'>
                <li className='nav-menu-item'>
                  <a href='#Contact' className='nav-menu-link'>Contact us</a>
                </li>
                <li className='nav-menu-item'>
                  <a href='#Login' className='nav-menu-link'>Login</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <VideoPlayer videoId="AKSgdx_VPRQ" />

      <div className="bottom-banner">
        <div className="bottom-banner-content">
          {/* Ici, tu peux ajouter du contenu à ton bandeau inférieur si nécessaire */}
        </div>
      </div>
    </div>
  );
}

export default App;
