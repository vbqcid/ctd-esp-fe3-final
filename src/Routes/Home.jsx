// Home.jsx
import React, { useState, useEffect } from 'react';
import Card from '../Components/Card'; // Asegúrate de que la ruta del componente Card sea correcta
import '../Styles/Home.css'; // Estilos personalizados para las Cards y modo oscuro

const Home = () => {
  const [dentists, setDentists] = useState([]);

  // Fetch de la API para obtener la lista de dentistas
  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error al obtener los dentistas:', error);
      }
    };

    fetchDentists();
  }, []);

  // Función para agregar dentista a favoritos y guardarlo en localStorage
  const addToFavorites = (dentist) => {
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Verifica si el dentista ya está en los favoritos
    if (!existingFavorites.some((fav) => fav.id === dentist.id)) {
      existingFavorites.push(dentist);
      localStorage.setItem('favorites', JSON.stringify(existingFavorites));
      alert(`${dentist.name} ha sido agregado a favoritos!`);
    } else {
      alert('Este dentista ya está en tus favoritos.');
    }
  };

  return (
    <div className="home-container">
      <h2>Listado de Dentistas</h2>
      <div className="card-grid">
        {/* Renderizamos cada Card con la información del dentista */}
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} addToFavorites={addToFavorites} />
        ))}
      </div>
    </div>
  );
};

export default Home;
