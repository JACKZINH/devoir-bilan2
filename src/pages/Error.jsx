import React from "react";
import ErrorImage from "../assets/img/error.jpg";

const Error = () => {
  return (
    <section className="container text-center my-5">
      {/* Titre 404 */}
      <h1 className="display-1 fw-bold text-primary">404</h1>
      {/* Sous-titre */}
      <h2 className="fs-3 text-primary">
        La page que vous recherchez n'existe pas
      </h2>
      {/* Image responsive */}
      <div className="my-4">
        <img src={ErrorImage} alt="Erreur 404" className="img-fluid" />
      </div>{" "}
    </section>
  );
};

export default Error;
