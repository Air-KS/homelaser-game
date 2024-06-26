/*
  ./src/styles/formStyle.css
*/

import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/body.css';
import '../styles/formStyle.css';

const Login = () => {
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
        <h1>Login</h1>
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
          <button type="submit">Se connecter</button>
        </form>
        <p style={{fontSize:'15px'}}><Link to='/signin'>No account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
