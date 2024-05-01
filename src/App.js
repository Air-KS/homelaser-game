/*
  ./src/App.js
*/

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import './styles/header.css';
import './styles/body.css';

import VideoPlayer from './components/VideoPlayer';
import Home from "./navigation/home";
import Contact from "./navigation/contact";
import Login from "./navigation/login";

import LaserHub from "./navigation/laserhub";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className='header' data-section-theme="light">
        <div className="top-banner">
          <div className="header-container">
            <div className="left-container">
              <a href="https://homelaser-game.vercel.app/">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
              </a>
            </div>
            <div className='right-container'>
              {/* Ajoute un bouton pour basculer le menu sur petits écrans */}
              <button className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span className="menu-toggle-bar top-bar"></span>
                <span className="menu-toggle-bar middle-bar"></span>
                <span className="menu-toggle-bar bottom-bar"></span>
              </button>
              {/* Modifie le nav pour ajouter une classe conditionnelle basée sur l'état isMenuOpen */}
              <nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
                <ul className='nav-menu'>
                  <li className='nav-menu-item'>
                    <Link to='/home' className='nav-menu-link'>Home</Link>
                  </li>
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
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/laserhub" element={<LaserHub />} />
      </Routes>
    </Router>
  );
}

export default App;
