// Favs.jsx
import React, { useContext, useEffect, useState } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context'; // Asegúrate de que el ThemeContext esté configurado correctamente

const Favs = () => {
  const { theme } = useContext(ContextGlobal); // Usamos el ThemeContext para obtener el tema actual
  const [favorites, setFavorites] = useState([]);

  // Recuperar los dentistas favoritos desde el localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className={`favs-container ${theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* Renderiza una Card por cada dentista favorito */}
        {favorites.length > 0 ? (
          favorites.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p>No tienes dentistas favoritos guardados.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
