// server.js

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/auth', authRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
