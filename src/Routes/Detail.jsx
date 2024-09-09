// Detail.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'; // Importa tu ThemeContext para gestionar el modo oscuro o claro.

const Detail = () => {
  const { theme } = useContext(ContextGlobal); // Obteniendo el tema del contexto.
  const { id } = useParams(); // Usamos useParams para obtener el ID del dentista desde la URL.
  const [dentist, setDentist] = useState(null); // Estado para almacenar la información del dentista.

  // Fetch a los detalles del dentista por ID.
  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentist();
  }, [id]);

  return (
    <div className={`detail-container ${theme}`}>
      <h1>Detail Dentist ID: {id}</h1>
      {dentist ? (
        <div className="dentist-details">
          <p><strong>Name:</strong> {dentist.name}</p>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Phone:</strong> {dentist.phone}</p>
          <p><strong>Website:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
