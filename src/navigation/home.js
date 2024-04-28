/*
  ./src/navigation/home.js
*/

import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/body.css';

const Home = () => {

  return (
    <div className='containerBody'>
      <h1>Bienvenue sur notre site</h1>
      <p><Link to='/laserhub'>Visitez LaserHub</Link></p>
    </div>
  );
}

export default Home;
