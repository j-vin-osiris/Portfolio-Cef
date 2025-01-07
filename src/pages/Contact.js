import React from "react";
import "../assets/style/contact.css";

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="fw-bold">Contact</h1>
          <p className="mb-4">
            Pour me contacter en vue d'un entretien ou d'une future
            collaborations, merci de remplir le formulaire de contact.
          </p>
          <div className="mb-5 border-contact border-bottom border-3 border-primary"></div>
        </div>
      </div>

      {/* creation du formulaire de contact */}
      <section className="row mt-5 mb-5 px-2 rounded shadow">
        <div className="col-lg-6 col-12 mb-4">
          <h2 className="fw-bold mt-4">Formulaire de contact</h2>
          <div className="mb-5 border-bottom border-3 border-primary"></div>
          <form>
            <div className="mb-3">
              <input
                type="text"
                id="nom"
                className="form-control"
                placeholder="Votre nom"
                required
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Votre adresse email"
                required
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="tel"
                id="tel"
                className="form-control"
                placeholder="Votre numéro de téléphone"
                required
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                id="sujet"
                className="form-control"
                placeholder="Sujet"
                required
              ></input>
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                id="message"
                rows="16"
                className="form-control"
                placeholder="Votre message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </div>
          </form>
        </div>

        {/* creation et intégration des coordonées géographique de john doe */}
        <div className="col-lg-6 col-12">
          <h2 className="fw-bold mt-4">Mes Coordonnées</h2>
          <div className="mb-5 border-bottom border-3 border-primary"></div>
          <h3 className="h4">John Doe</h3>
          <p className="mb-0">
            <i class="bi bi-map"></i> 40 rue Laure Diebold
          </p>
          <p className="mb-0">
            <i class="bi bi-geo-alt"></i> 69009 Lyon, France
          </p>
          <p className="mb-0">
            <i class="bi bi-phone"></i> 10 20 30 40 50
          </p>
          <p>
            <i class="bi bi-envelope-at"></i> john.doe@gmail.com
          </p>

          {/* utilisation de iframe pour intégration googlemaps */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.6271559985175!2d4.798946315498682!3d45.77991847910688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eaee061cfdbf%3A0xdb50f7e52015ab7!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sen!2sfr!4v1670000000000!5m2!1sen!2sfr"
              width="100%"
              height="500"
              allowFullScreen=""
              loading="lazy"
              title="John Doe adresse"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
