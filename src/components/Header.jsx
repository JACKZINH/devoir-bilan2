import React from "react";
import "../assets/styles/header.css"; // Fichier CSS pour les styles

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src="/path/to/logo.svg" alt="Logo" />
        </div>

        {/* Barre de recherche */}
        <div className="search-bar">
          <input type="text" placeholder="Rechercher un artisan..." />
        </div>

        {/* Menu */}
        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <a href="/batiment">Bâtiment</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/fabrication">Fabrication</a>
            </li>
            <li>
              <a href="/alimentation">Alimentation</a>
            </li>
          </ul>
        </nav>

        {/* Menu Hamburger pour mobile */}
        <div className="hamburger-menu">
          <button>☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
