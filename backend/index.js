const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Alegeți un port disponibil

// Middleware pentru a analiza corpul solicitării JSON
app.use(bodyParser.json());

// Simulare bază de date (pentru scopuri de exemplu)
const users = [];

// Endpoint pentru login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Autentificare reușită' });
  } else {
    res.status(401).json({ message: 'Email sau parolă incorectă' });
  }
});

// Endpoint pentru înregistrare
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find(u => u.email === email);

  if (existingUser) {
    res.status(400).json({ message: 'Email-ul este deja înregistrat' });
  } else {
    users.push({ email, password });
    res.status(201).json({ message: 'Utilizator înregistrat cu succes' });
  }
});

app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const cors = require("cors");