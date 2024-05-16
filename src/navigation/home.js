/*
  ./src/navigation/home.js
*/

import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/body.css';

import qrcode from '../assets/images/qrcode.png';

const Home = () => {

  return (
    <div className='containerBody'>
      <h1>Bienvenue sur notre site</h1>
      <p><Link to='/laserhub'>Visitez LaserHub</Link></p>
      <img src={qrcode} alt="LaserHub" />
    </div>
  );
}

export default Home;
