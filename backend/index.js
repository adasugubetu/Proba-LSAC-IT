console.log ("Primul meu")

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

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="left-section">
          <img src={logo} className="App-logo" alt="logo" />
          <p>IT LSAC</p>
        </div>
        <div className="right-section">
          <button className="navbar-button">Login</button>
          <button className="navbar-button">Register</button>
        </div>
      </div>
    );
  };

app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});