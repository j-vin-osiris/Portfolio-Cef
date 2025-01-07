import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../assets/style/modal.css";

// utilisation de usestate pour creer une variable qui définis l'état de la modale (fermée par défaut) et pour creer une variable qui récupére les données de l'api.
const Modal = () => {
  const [profile, setProfile] = useState({});
  const [showModal, setShowModal] = useState(false);

  //   utilisation de useEffect pour mettre à jour les données de l'api et les stocker dans l'état profile via setProfile

  useEffect(() => {
    Axios.get(`https://api.github.com/users/github-john-doe`).then((response) =>
      setProfile(response.data)
    );
  });

  return (
    <div>
      <button className="btn btn-danger" onClick={() => setShowModal(true)}>
        En savoir plus
      </button>
      <div
        className="modal show d-bloc"
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header text-white">
              <h2>Mon profil GitHub</h2>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body ">
              <div className="container">
                <div className="row">
                  <div className="col-6 text-center ">
                    <img
                      src={profile.avatar_url}
                      alt="Profile"
                      className="img-fluid profile-img mb-3"
                    ></img>
                  </div>
                  <div className="col-6 text-start">
                    <ul className="list-unstyled mb-2">
                      <li className="border-bottom border-secondary-subtle mb-3 ">
                        <i className=" bi bi-person me-1"></i>
                        <a
                          href={profile.html_url || "Nom non spécifiée"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profile.name}
                        </a>
                      </li>
                      <li className="border-bottom border-secondary-subtle mb-3 ">
                        <i className=" bi bi-geo-alt me-1"></i>
                        {profile.location || ""}{" "}
                      </li>
                      <li className="border-bottom border-secondary-subtle mb-3">
                        <i className=" bi bi-card-text me-1"></i>
                        {profile.bio || "Pas de bio disponible"}
                      </li>
                      <li className="border-bottom border-secondary-subtle mb-3">
                        <i className=" bi bi-box me-1"></i>Repositories :{" "}
                        {profile.public_repos}
                      </li>
                      <li className="border-bottom border-secondary-subtle mb-3">
                        <i className="bi bi-people me-1"></i>Followers :{" "}
                        {profile.followers}
                      </li>
                      <li>
                        <i className="bi bi-people me-1"></i>Following :
                        {profile.following}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
