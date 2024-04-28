/*
  ./src/navigation/laserhub.js
*/

import React, { useRef, useEffect } from 'react';
import '../styles/body.css';

const LaserHub = () => {
  const laserhubRef = useRef(null);

  useEffect(() => {
    if (laserhubRef.current) {
      laserhubRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="containerBody">
      <div ref={laserhubRef}>
        <h1>LaserHub</h1>
        <p>La page pour LaserHub</p>
        {/* Ajoute ici éléments de la page de laserhub */}
      </div>
    </div>
  );
}

export default LaserHub;
