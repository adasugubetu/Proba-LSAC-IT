import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Autentificare reușită');
        // Aici poți efectua redirecționarea către o altă pagină sau afișarea unui mesaj de succes
      } else {
        const data = await response.json();
        setError(data.error || 'Eroare de autentificare');
      }
    } catch (error) {
      console.error('Eroare de rețea:', error);
      setError('Eroare de rețea');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {/* Bara superioară statică */}
      <div className="top-bar">
        {/* Adaugă aici elementele din bara superioară, cum ar fi logo-ul și butoanele */}
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>IT LSAC</p>
      </div>

      {/* Restul conținutului paginii */}
      <div className="main-content">
        {loading && <p>Se încarcă...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Formular de login */}
        <div className="login-container">
          {/* Rândul pentru email */}
          <div className="input-row">
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          {/* Rândul pentru parolă */}
          <div className="input-row">
            <label>
              Parolă:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          {/* Butonul de login */}
          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>
        </div>

        <a
          className="App-link"
          href="https://www.instagram.com/lsacbucuresti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LSAC Bucuresti
        </a>
      </div>
    </div>
  );
}

export default App;