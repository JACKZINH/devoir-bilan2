import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 </h1>
      <p>La page que vous recherchez n'existe pas</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default Error;
