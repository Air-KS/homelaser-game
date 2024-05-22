// backend/authController.js

const db = require('../db');

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const query = `SELECT * FROM users WHERE email = ? AND mot_de_passe = ?`;
  db.query(query, [email, password], (err, result) => {
    if (err) {
      console.error('Erreur lors de la requête :', err);
      res.status(500).send('Erreur serveur');
      return;
    }

    if (result.length === 1) {
      res.status(200).send('Connexion réussie');
    } else {
      res.status(401).send('Email ou mot de passe incorrect');
    }
  });
};

exports.register = (req, res) => {
  const { email, password } = req.body;

  const query = `INSERT INTO users (email, mot_de_passe) VALUES (?, ?)`;
  db.query(query, [email, password], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'enregistrement :', err);
      res.status(500).send('Erreur serveur');
      return;
    }

    res.status(201).send('Utilisateur enregistré avec succès');
  });
};
