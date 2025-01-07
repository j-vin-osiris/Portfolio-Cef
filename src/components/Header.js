import React from "react";
import "../assets/style/header.css";
import "../assets/style/style.css";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark position-sticky bg-dark">
        <div className="container-fluid">
          {/* Ajout du logo textuel */}
          <a className="navbar-brand text-light text-uppercase">John Doe</a>

          {/* ajout du burger menu */}
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav nav-ms-auto justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                {/* utilisation de Navlink avec fonction isActive pour affiché l'élément actif dans une autre couleur */}
                <NavLink
                  to="/"
                  className="nav-link text-uppercase"
                  style={({ isActive }) => {
                    return isActive
                      ? {
                          color: "plum",
                          fontWeight: "bolder",
                          textDecoration: "underline",
                        }
                      : {};
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Services"
                  className="nav-link text-uppercase"
                  style={({ isActive }) => {
                    return isActive
                      ? {
                          color: "plum",
                          fontWeight: "bolder",
                          textDecoration: "underline",
                        }
                      : {};
                  }}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Portfolio"
                  className="nav-link text-uppercase"
                  style={({ isActive }) => {
                    return isActive
                      ? {
                          color: "plum",
                          fontWeight: "bolder",
                          textDecoration: "underline",
                        }
                      : {};
                  }}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className="nav-link text-uppercase"
                  style={({ isActive }) => {
                    return isActive
                      ? {
                          color: "plum",
                          fontWeight: "bolder",
                          textDecoration: "underline",
                        }
                      : {};
                  }}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Mentions Legales"
                  className="nav-link text-uppercase"
                  style={({ isActive }) => {
                    return isActive
                      ? {
                          color: "plum",
                          fontWeight: "bolder",
                          textDecoration: "underline",
                        }
                      : {};
                  }}
                >
                  Mentions Legales
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
