/*
  ./src/styles/formStyle.css
*/

import React, { useRef, useEffect, useState } from 'react';

import '../styles/body.css';
import '../styles/formStyle.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginRef = useRef(null);

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Ajouter la logique de connexion ici
    console.log('Email:', email);
    console.log('Mot de passe:', password);
    // Réinitialiser les champs après la soumission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="containerBody">
      <div ref={loginRef}>
        <h1>Sign in</h1>
        <p>Veuillez vous connecter pour accéder à votre compte.</p>
        <div className='form-container'>
        <form className="" onSubmit={handleLoginSubmit}>
          <label>
            E-mail:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">S'inscrire</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
