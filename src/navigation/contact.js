/* src/navigation/contact.js */
import React, { useRef, useEffect } from 'react';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div ref={contactRef}>
      <br /> <br/> <br/>
      <h1>Contact</h1>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      <p>La page qui permet de nous contacter</p>
      {/* Ajoute ici éléments de la page de Contact */}
    </div>
  );
}

export default Contact;
