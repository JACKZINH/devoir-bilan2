import React from "react";
import "../assets/styles/footer.css";

function Footer() {
  return (
    <footer className=" text-white py-4" style={{ backgroundColor: "#0074C7" }}>
      <div className="container">
        <div className="row">
          {/* Colonne GAUCHE (adresse) */}
          <div
            className="
              col-12 col-md-6
              mb-3 mb-md-0
              text-center text-md-start
              footer-col-left
            ">
            <h5 className="fw-bold">Lyon</h5>
            <p className="mb-1">
              101 cours Charlemagne CS 20033
              <br />
              69269 LYON CEDEX 02 France
            </p>
            <p className="mb-1">
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <a
                href="tel:+33426734000"
                className="text-white text-decoration-none">
                +33 (0)4 26 73 40 00
              </a>
            </p>
          </div>

          {/* Barre horizontale EN MOBILE seulement */}
          <hr className="d-md-none text-white my-3 opacity-100" />

          {/* Colonne DROITE (liens) */}
          <div
            className="
              col-12 col-md-6
              d-flex flex-column
              align-items-center align-items-md-end
              text-center text-md-end
            ">
            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="/mentions-legales"
                  className="text-white text-decoration-none">
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/donnees-personnelles"
                  className="text-white text-decoration-none">
                  Données personnelles
                </a>
              </li>
              <li>
                <a
                  href="/accessibilite"
                  className="text-white text-decoration-none">
                  Accessibilité
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-white text-decoration-none">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
