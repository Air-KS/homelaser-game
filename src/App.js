// ./App.js
import React from 'react';
import VideoPlayer from './components/VideoPlayer';


import './App.css';
import './styles/header.css';

function App() {
  return (
    <div className="App">
      <div className="top-banner">
        <div className="banner-content">
          <div className="left-container">
          <a href="https://air-ks.github.io/homelaser-game/">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
            </a>
          </div>
          <div className="right-container">
            <div className="navigation-links">
              <a href="#Contactus">Contact us</a>
              <a href="#Login">Login</a>
            </div>
          </div>
        </div>
      </div>
      <VideoPlayer videoId="AKSgdx_VPRQ" />
    </div>
  );
}

export default App;
