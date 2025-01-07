import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";
import "../assets/style/footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container fluid className="p-4">
        <Row className="d-flex justify-content-center">
          <Col className="col-md-3 mb-3">
            <h4>John Doe</h4>
            <p>
              40 rue Laure Diebold <br />
              69009 Lyon, France <br />
              10 20 30 40 50 <br />
              <a href="mailto:johndoe@gmail.com" className="text-light">
                john.doe@gmail.com
              </a>
            </p>
            <div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-secondary me-3"
              >
                <i className="bi bi-github" style={{ fontSize: "24px" }}></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-secondary me-3"
              >
                <i className="bi bi-linkedin" style={{ fontSize: "24px" }}></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-secondary me-3"
              >
                <i className="bi bi-twitter" style={{ fontSize: "24px" }}></i>
              </a>
            </div>
          </Col>

          <Col className="col-md-3 mb-3">
            <h4>Liens utiles</h4>
            <ul className="list-unstyled">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Portfolio" className="nav-link">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link">
                  Me contacter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Mentions Legales" className="nav-link">
                  Mentions Legales
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col className="col-md-3 mb-3">
            <h4>Mes dernieres réalisations</h4>
            <ul className="list-unstyled">
              <li className="nav-item">
                <NavLink to="/Portfolio" className="nav-link">
                  FreshFood
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Portfolio" className="nav-link">
                  Restaurant Akira
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Portfolio" className="nav-link">
                  Espace bien-être
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Portolio" className="nav-link">
                  SEO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Portfolio" className="nav-link">
                  Création d'un API
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Portfolio" className="nav-link">
                  Maquettes d'un site
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
