import React from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", marginBottom: 50, textAlign: "center" }}>
        <div>
          <h2>¿Quieres saber más?</h2>
          <p>Déjanos tu nombre y tu email y te contactaremos lo mas pronto posible.</p>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
