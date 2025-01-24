import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import artisansData from "../assets/data/datas.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faMapMarkerAlt,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

function Home() {
  const topArtisans = artisansData
    .filter((a) => a.top === true) // je prends ceux marqués "top:true"
    .slice(0, 3); // j’en limite 3

  // Fonction de rendu des étoiles (même logique que d’habitude)
  const renderStars = (note) => {
    const fullStars = Math.floor(note);
    const halfStar = note % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon
            key={`full-${index}`}
            icon={faStar}
            className="text-warning"
          />
        ))}
        {halfStar && (
          <FontAwesomeIcon
            key="half"
            icon={faStarHalfAlt}
            className="text-warning"
          />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon
            key={`empty-${index}`}
            icon={faStarEmpty}
            className="text-warning"
          />
        ))}
      </>
    );
  };

  return (
    <div className="container my-5">
      <Helmet>
        <title>Accueil - Trouve ton artisan</title>
        <meta
          name="description"
          content="Bienvenue sur Trouve ton artisan. Trouvez les meilleurs artisans près de chez vous."
        />
      </Helmet>
      {/* Titre principal */}
      <h1 className="text-center fw-bold" style={{ color: "#0074C7" }}>
        Bienvenue sur “Trouve ton artisan”
      </h1>

      {/* Encadré : “Comment trouver mon artisan ?” */}
      <div
        className="mt-4 p-4 border border-primary rounded text-center shadow"
        style={{ backgroundColor: "#F1F8FC" }}>
        <h3 className="fw-bold" style={{ color: "#0074C7" }}>
          Comment trouver mon artisan ?
        </h3>
        <div className="mt-3" style={{ color: "#0074C7" }}>
          <ol className="mb-0 list-unstyled">
            <li>
              <span style={{ color: "black" }}>Choisir la catégorie</span>
              <br />
              <FontAwesomeIcon icon={faArrowDown} />
            </li>
            <li>
              <span style={{ color: "black" }}>Choisir un artisan</span>
              <br />
              <FontAwesomeIcon icon={faArrowDown} />
            </li>
            <li>
              <span style={{ color: "black" }}>
                Le contacter via le formulaire
              </span>
              <br />
              <FontAwesomeIcon icon={faArrowDown} />
            </li>
            <li>
              <span style={{ color: "black" }}>Une réponse en 48H</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Titre section “Artisans du mois” */}
      <h2 className="text-center fw-bold mt-5" style={{ color: "#0074C7" }}>
        Artisans du mois
      </h2>

      {/* Cartes artisans */}
      <div className="row mt-4">
        {topArtisans.map((artisan) => (
          <div key={artisan.id} className="col-12 col-md-4 mb-4">
            {/* Le Link rend la card cliquable, dirigeant vers la page détail */}
            <Link
              to={`/artisandetails/${artisan.id}`}
              style={{ textDecoration: "none" }}>
              <div
                className="card p-3"
                style={{
                  backgroundColor: "#F1F8FC",
                  color: "#0074C7",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  height: "100%",
                }}>
                <h5 className="fw-bold">Nom de l'artisan : {artisan.name}</h5>
                <p className="mb-1" style={{ color: "black" }}>
                  <strong>Note:</strong> {renderStars(parseFloat(artisan.note))}
                </p>
                <p className="mb-1" style={{ color: "black" }}>
                  <strong>Spécialité :</strong> {artisan.specialty}
                </p>
                <p className="mb-1" style={{ color: "black" }}>
                  <strong>Localisation :</strong> {artisan.location}, France{" "}
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-danger"
                  />
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
