// App.js
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import InventarioTable from './components/InventarioTable';

function App() {
  const [token, setToken] = useState(sessionStorage.getItem('auth_token') || '');

  const handleLogin = (token) => {
    sessionStorage.setItem('auth_token', token);
    setToken(token);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('auth_token');
    setToken('');
  };

  return (
    <div className="App">
      <header className="App-header flex justify-between items-center w-full p-4">
        <h1>Inventario</h1>
        {token && (
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 text-sm rounded">
            Cerrar sesión
          </button>

        )}
      </header>
      {!token ? (
        <Login onLogin={handleLogin} />
      ) : (
        <InventarioTable token={token} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
