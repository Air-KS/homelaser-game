// backend/db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'lasergamedb',
  password: '5910',
  port: 5432, // Port par défaut pour PostgreSQL
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connexion à la base de données réussie');
  release();
});

module.exports = pool;
