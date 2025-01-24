import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/artisanlist?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow px-5"
      style={{ backgroundColor: "#f1f8fc" }}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Trouve ton artisan"
            style={{ width: "180px", height: "auto" }}
          />
        </Link>

        {/* Bouton burger (visible <992px, caché >=992px) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Le bloc qui se replie/étend */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Menu */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center gap-4">
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="/artisanlist?category=batiment">
                Bâtiment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="/artisanlist?category=services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="/artisanlist?category=fabrication">
                Fabrication
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="/artisanlist?category=alimentation">
                Alimentation
              </Link>
            </li>
          </ul>

          {/* Barre de recherche */}
          <form
            className="row my-2 my-lg-0 align-items-center"
            onSubmit={handleSearchSubmit}>
            <div
              className="
      col-12 col-lg-3
      input-group
      border-1 border-bottom border-end border-primary
      rounded-0
    ">
              <input
                type="text"
                className="form-control border-0 bg-transparent"
                placeholder="Rechercher..."
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button
                type="submit"
                className="input-group-text border-0 bg-transparent">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-primary"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
