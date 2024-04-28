/* src/navigation/login.js */
import React, { useRef, useEffect } from 'react';
import '../styles/body.css';

const Login = () => {
  const loginRef = useRef(null);

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="conteneurBody"> {/* Ajout du conteneur pour le corps de la page */}
      <div ref={loginRef}>
        <br /> <br/> <br/>
        <h1>Login</h1>
        <p>Veuillez vous connecter pour accéder à votre compte.</p>
        <p>Veuillez vous connecter pour accéder à votre compte.</p>
        <p>Veuillez vous connecter pour accéder à votre compte.</p>
        <p>Veuillez vous connecter pour accéder à votre compte.</p>
        <p>Veuillez vous connecter pour accéder à votre compte.</p>
        <p>Veuillez vous connecter pour accéder à votre compte.</p>
        <p>Veuillez vous connecter pour accéder à votre compte.</p>
        <p>Veuillez vous connecter pour accéder à votre compte.</p>
        {/* Ajoute ici les éléments de la page de connexion */}
      </div>
    </div>
  );
}

export default Login;
