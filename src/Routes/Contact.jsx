// Contact.jsx
import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextProvider } from '../Components/utils/global.context'; // Importa tu ThemeContext para gestionar el modo oscuro o claro.


const Contact = () => {
  const { theme } = useContext(ContextProvider); // Obteniendo el tema del contexto.

  return (
    <div className={`contact-container ${theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
