import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/header.css";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light shadow px-5"
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

        {/* Bouton burger (Bootstrap) */}
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

        {/* Contenu qui se replie (menu + recherche) */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Menu de gauche */}
          <ul className="navbar-nav mx-auto mb-2 mb-md-0 d-flex justify-content-center gap-4">
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

          {/* Recherche (input group) */}
          <form className="d-flex">
            <div
              className="input-group"
              style={{
                borderBottom: "1px solid #0074c7",
                borderRight: "1px solid #0074c7",
              }}>
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher..."
                aria-label="Search"
                style={{
                  border: "none",
                  boxShadow: "none",
                  borderRadius: 0,
                  backgroundColor: " #f1f8fc",
                }}
              />
              <span
                className="input-group-text"
                style={{
                  border: "none",
                  background: "none",
                }}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#0074c7" }}
                />
              </span>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
