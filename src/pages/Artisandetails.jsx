import React from "react";
import { useParams } from "react-router-dom";
import artisansData from "../assets/data/datas.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

/* Import de ta feuille ArtisanDetails.css */
import "../assets/styles/artisandetails.css";

const Artisandetails = () => {
  const { id } = useParams();
  const artisan = artisansData.find((a) => a.id === id);

  if (!artisan) {
    return (
      <div className="container my-5">
        <h1 className="text-center text-danger">Artisan introuvable</h1>
      </div>
    );
  }

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
      {/* Titre principal */}
      <h1 className="text-center mb-4 fw-bold" style={{ color: "#0074C7" }}>
        Détails de l'artisan
      </h1>

      {/* Zone encadrée */}
      <div
        className="p-4"
        style={{
          backgroundColor: "#F1F8FC",
          color: "#0074C7",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}>
        <div className="row">
          {/* Colonne GAUCHE (infos) */}
          <div
            className="
              col-12 col-md-6
              text-center text-md-start
              pe-md-4
              border-md-right
            ">
            <h5 className="fw-bold">Nom de l'artisan :</h5>
            <p>{artisan.name}</p>

            <h5 className="fw-bold">Note :</h5>
            <p>{renderStars(parseFloat(artisan.note))}</p>

            <h5 className="fw-bold">Spécialité :</h5>
            <p>{artisan.specialty}</p>

            <h5 className="fw-bold">Localisation :</h5>
            <p>
              {artisan.location}, France{" "}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  artisan.location + ", France"
                )}`}
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-danger"
                />
              </a>
            </p>

            <h5 className="fw-bold">À propos :</h5>
            <p>{artisan.about}</p>

            {artisan.website && (
              <p className="mt-3">
                <span className="fw-bold">Site web de l'artisan : </span>
                <a
                  href={artisan.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ color: "#0074C7" }}>
                  {artisan.website}{" "}
                  <FontAwesomeIcon icon={faGlobe} className="ms-1" />
                </a>
              </p>
            )}
          </div>

          {/* Séparateur horizontal visible seulement en mobile */}
          <hr
            className="d-md-none my-4"
            style={{ border: "1px solid #E0E0E0" }}
          />

          {/* Colonne DROITE (formulaire) */}
          <div className="col-12 col-md-6">
            <h5 className="fw-bold mb-3">Formulaire de contact :</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Nom :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Votre nom complet"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label fw-bold">
                  Objet :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Objet de votre message"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">
                  Message :
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Votre message ici"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artisandetails;
