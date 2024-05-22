/*
  ./src/navigation/laserhub.js
*/

import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import '../styles/body.css';

const LaserHub = () => {
  const laserhubRef = useRef(null);

  useEffect(() => {
    if (laserhubRef.current) {
      laserhubRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Fonction pour envoyer la requête POST
  const handleChangeColor = (color) =>
    {
      axios.post('http://<ESP_IP_ADRESSE>/color', { color })
      .then(response => {
        console.log('Color changed to', color);
      })
      .catch(error => {
        console.log('Error changing color:', error);
      });
    };

  return (
    <div className="containerBody">
      <div ref={laserhubRef}>
        <h1>LaserHub</h1>
        <p>La page pour LaserHub</p>
        {/* Ajoute ici éléments de la page de laserhub */}
        <button onClick={() => handleChangeColor('red')}>Rouge</button>
        <button onClick={() => handleChangeColor('green')}>Vert</button>
        <button onClick={() => handleChangeColor('blue')}>Bleu</button>
        <button onClick={() => handleChangeColor('yellow')}>Jaune</button>
      </div>
    </div>
  );
}

export default LaserHub;
