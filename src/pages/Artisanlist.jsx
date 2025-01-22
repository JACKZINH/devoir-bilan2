import React, { useState } from "react";
import artisansData from "../assets/data/datas.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

const Artisanlist = () => {
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [noteFilter, setNoteFilter] = useState("");
  const [filteredArtisans, setFilteredArtisans] = useState(artisansData);

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

  const handleFilter = () => {
    let filtered = artisansData;

    if (specialtyFilter) {
      filtered = filtered.filter(
        (artisan) => artisan.specialty === specialtyFilter
      );
    }

    if (noteFilter) {
      filtered = filtered.filter(
        (artisan) => parseFloat(artisan.note) >= parseFloat(noteFilter)
      );
    }

    setFilteredArtisans(filtered);
  };

  const handleReset = () => {
    setSpecialtyFilter("");
    setNoteFilter("");
    setFilteredArtisans(artisansData);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 fw-bold" style={{ color: "#0074C7" }}>
        Liste des Artisans
      </h1>

      <div
        className="p-4 mb-4"
        style={{
          backgroundColor: "#F1F8FC",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}>
        <div className="row mb-4">
          <div className="col-md-4">
            <select
              className="form-select"
              value={specialtyFilter}
              onChange={(e) => setSpecialtyFilter(e.target.value)}>
              <option value="">Toutes les spécialités</option>
              {[
                ...new Set(artisansData.map((artisan) => artisan.specialty)),
              ].map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={noteFilter}
              onChange={(e) => setNoteFilter(e.target.value)}>
              <option value="">Toutes les notes</option>
              <option value="1">1 étoile et plus</option>
              <option value="2">2 étoiles et plus</option>
              <option value="3">3 étoiles et plus</option>
              <option value="4">4 étoiles et plus</option>
              <option value="5">5 étoiles</option>
            </select>
          </div>
          <div className="col-md-4 d-flex justify-content-between">
            <button className="btn btn-primary" onClick={handleFilter}>
              Appliquer les filtres
            </button>
            <button className="btn btn-secondary" onClick={handleReset}>
              Réinitialiser
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {filteredArtisans.map((artisan) => (
          <div className="col-md-4 mb-4" key={artisan.id}>
            <div
              className="card"
              style={{
                backgroundColor: "#F1F8FC",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                color: "#0074C7",
              }}>
              <div className="card-body">
                <h5 className="card-title">{artisan.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {artisan.specialty}
                </h6>
                <p className="card-text">
                  <strong>Note:</strong> {renderStars(parseFloat(artisan.note))}{" "}
                  <br />
                  <strong>Localisation:</strong> {artisan.location}{" "}
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artisanlist;
