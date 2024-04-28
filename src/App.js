import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import './styles/header.css';
import './styles/body.css';

import VideoPlayer from './components/VideoPlayer';
import Home from "./navigation/home";
import Contact from "./navigation/contact";
import Login from "./navigation/login";

function App() {
  return (
    <Router>
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
                    <Link to='/contact' className='nav-menu-link'>Contact us</Link>
                  </li>
                  <li className='nav-menu-item'>
                    <Link to='/login' className='nav-menu-link'>Login</Link>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
