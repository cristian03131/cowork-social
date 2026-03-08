import React, { useState } from 'react';
import { mockUsers } from '../data/mockUsers'; // Importamos tus datos mock
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Lógica de filtrado: busca por nombre o por skill
  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page">
      <h2>Buscador de Usuarios 🔍 </h2>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por nombre o tecnología (ej: React)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="results-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <h3>{user.name}</h3>
              <p>{user.skill}</p>
              <button className="view-profile-btn">Ver Perfil</button>
            </div>
          ))
        ) : (
          <p className="no-results">No se encontraron usuarios con "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default Search;