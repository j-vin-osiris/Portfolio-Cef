import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import imgHead from "../assets/images/banner.jpg";
import FreshFood from "../assets/images/portfolio/fresh-food.jpg";
import RstJap from "../assets/images/portfolio/restaurant-japonais.jpg";
import BienEtre from "../assets/images/portfolio/espace-bien-etre.jpg";
import Seo from "../assets/images/portfolio/seo.jpg";
import Coder from "../assets/images/portfolio/coder.jpg";
import Screens from "../assets/images/portfolio/screens.jpg";
import "../assets/style/portfolio.css";

const Portfolio = () => {
  return (
    <section>
      <img src={imgHead} alt="banner" className="img-fluid w-100"></img>
      <div className="services-section container my-5">
        <h1 className="text-center fw-bold">Portfolio</h1>
        <p className="text-center ">Voici quelques une de mes réalisations.</p>
      </div>

      <div className="mb-5 border-portfolio border-bottom border-3 border-primary"></div>
      <Container>
        <Row>
          <Col className="col-12 col-md-6 col-lg-4 mb-4">
            <div className=" card portfolio-card h-100">
              <Card.Img variant="top" src={FreshFood} />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Fresh Food</Card.Title>
                <Card.Text className="text-center fw-bold">
                  Site de vente de produits frais en ligne
                </Card.Text>
                <Button className="btn-portfolio btn-primary">
                  Voir le site
                </Button>
              </Card.Body>
              <Card.Footer className="text-center">
                Site réalisé avec PHP et MYSQL
              </Card.Footer>
            </div>
          </Col>
          <Col className="col-12 col-md-6 col-lg-4 mb-4">
            <div className=" card portfolio-card h-100">
              <Card.Img variant="top" src={RstJap} />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Restaurant Akira</Card.Title>
                <Card.Text className="text-center fw-bold">
                  Site de vente de produits frais en ligne
                </Card.Text>
                <Button className="btn-portfolio btn-primary">
                  Voir le site
                </Button>
              </Card.Body>
              <Card.Footer className="text-center">
                Site réalisé avec WordPress
              </Card.Footer>
            </div>
          </Col>
          <Col className="col-12 col-md-6 col-lg-4 mb-4">
            <div className=" card portfolio-card h-100">
              <Card.Img variant="top" src={BienEtre} />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Espace Bien-être</Card.Title>
                <Card.Text className="text-center fw-bold">
                  Site de vente de produits frais en ligne
                </Card.Text>
                <Button className="btn-portfolio btn-primary">
                  Voir le site
                </Button>
              </Card.Body>
              <Card.Footer className="text-center">
                Site réalisé avec LAVAREL
              </Card.Footer>
            </div>
          </Col>

          <Col className="col-12 col-md-6 col-lg-4 mb-4">
            <div className=" card portfolio-card h-100">
              <Card.Img variant="top" src={Seo} />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">SEO</Card.Title>
                <Card.Text className="text-center fw-bold">
                  Améliorations du référencement d'un site de e-commerce.
                </Card.Text>
                <Button className="btn-portfolio btn-primary">
                  Voir le site
                </Button>
              </Card.Body>
              <Card.Footer className="text-center">
                Utilisation des outils SEO.
              </Card.Footer>
            </div>
          </Col>

          <Col className="col-12 col-md-6 col-lg-4 mb-4">
            <div className=" card portfolio-card h-100">
              <Card.Img variant="top" src={Coder} />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Création d'une API</Card.Title>
                <Card.Text className="text-center fw-bold">
                  Création d'une API RESTFULL public.
                </Card.Text>
                <Button className="btn-portfolio btn-primary">
                  Voir le site
                </Button>
              </Card.Body>
              <Card.Footer className="text-center">PHP - SYMPHONY.</Card.Footer>
            </div>
          </Col>
          <Col className="col-12 col-md-6 col-lg-4 mb-4">
            <div className=" card portfolio-card h-100">
              <Card.Img variant="top" src={Screens} />
              <Card.Body className="text-center ">
                <Card.Title className="fw-bold">
                  Maquette d'un site web
                </Card.Title>
                <Card.Text className="text-center fw-bold">
                  Création du prototype d'un site
                </Card.Text>
                <Button className="btn-portfolio btn-primary">
                  Voir le site
                </Button>
              </Card.Body>
              <Card.Footer className="text-center">
                Réaliser avec FIGMA.
              </Card.Footer>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
