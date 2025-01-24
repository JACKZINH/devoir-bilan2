import React from "react";
import { Helmet } from "react-helmet-async";
import ErrorImage from "../assets/img/error.jpg";

const Error = () => {
  return (
    <section className="container text-center my-5">
      <Helmet>
        <title>Erreur 404 - Page non trouvée</title>
        <meta
          name="description"
          content="La page que vous recherchez n'existe pas. Veuillez vérifier l'URL ou revenir à la page d'accueil."
        />
      </Helmet>
      {/* Titre 404 */}
      <h1 className="display-1 fw-bold " style={{ color: "#0074C7" }}>
        404
      </h1>
      {/* Sous-titre */}
      <h2 className="display-3 fw-bold " style={{ color: "#0074C7" }}>
        La page que vous recherchez n'existe pas
      </h2>
      {/* Image responsive */}
      <div className=" ">
        <img src={ErrorImage} alt="Erreur 404" className="img-fluid" />
      </div>{" "}
    </section>
  );
};

export default Error;
