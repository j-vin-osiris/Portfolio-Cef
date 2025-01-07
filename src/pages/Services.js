import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import imgHead from "../assets/images/banner.jpg";
import "../assets/style/services.css";

const Services = () => {
  return (
    <section>
      <img src={imgHead} alt="banner" className="img-fluid w-100"></img>
      <div className="services-section container my-5">
        <h1 className="text-center fw-bold">Mon offre de services</h1>
        <p className="text-center ">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
        <div className="mb-5 border-services border-bottom border-3 border-primary"></div>

        <Container>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            <Col>
              <div className=" card services-card card h-100">
                <Card.Body className="text-center p-3 ">
                  <i className="icon bi bi-brush fs-2"></i>
                  <Card.Title className="fw-bold mt-3">UX Design</Card.Title>
                  <Card.Text className="text-center">
                    L'UX design est une discipline qui consiste à concevoir des
                    produits (sites-web, applications mobiles, logiciels, objets
                    connectés, etc.) en plaçant l'utilisateur au centre des
                    préocupations.L'objectif est de rendre l'expérience
                    utilisateur la plus fluide et agréable possible.
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
            <Col>
              <div className=" card services-card h-100">
                <Card.Body className="text-center p-3 ">
                  <i className="icon bi bi-code-slash fs-2"></i>
                  <Card.Title className="fw-bold mt-3">
                    Développement
                  </Card.Title>
                  <Card.Text className="text-center">
                    Le développement de sites web consiste à creer des sites
                    internet en utilisant des langages de programmation (HTML,
                    CSS, JavaScript, PHP etc.) et des frameworks (Bootstrap,
                    React, Angular, etc.).
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
            <Col>
              <div className=" card services-card h-100">
                <Card.Body className="text-center p-3 ">
                  <i className="icon bi bi-search fs-2"></i>
                  <Card.Title className="fw-bold mt-3">UX Design</Card.Title>
                  <Card.Text className="text-center">
                    Le référencement naturel (SEO) est une technique qui
                    consiste à optimiser un site web pour le remonter dans les
                    resultats des moteurs de recherche (Google, Bing, Yahoo,
                    etc.). L'objectif est d'attirer un maximum de visiteurs
                    qualifiés sur le site.
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default Services;
